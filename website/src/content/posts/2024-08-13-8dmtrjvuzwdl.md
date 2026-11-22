---
title: "ERP项目中的初次代码修改之旅"
author: "王依民"
pubDatetime: "2024-08-13T14:23:57.169Z"
description: "从客户先借款后申请的实际场景入手，尝试调整报销冲借款的同源查询限制。"
tags: ["项目实践"]
featured: true
draft: false
---

原文发布：2024-08-13 · [Matters 来源](https://matters.town/a/8dmtrjvuzwdl)


### **问题描述**

在用友ERP BIP高级版的费用报销模块中，有一个被称为“同源理论”的逻辑。即如果报销单是参照申请单生成的，那么报销单在冲借款时，必须参照报销单所参照的申请单进行生成的借款单才能进行冲销。然而，在实际业务场景中，客户经常是先借款后申请，这样系统中的同源逻辑就无法满足实际需求，导致流程无法顺利跑通。这个问题对于客户来说是个重要的痛点，需要我们找到一个解决方案。

### **与集团的沟通**

发现问题后，我首先与集团的技术支持团队进行了沟通。集团老师建议通过一个相对简单的代码修改来解决问题，并将相关的修改方案提供给我们。在了解了方案后，我觉得这个修改并不复杂，决定自己尝试进行修改。

### **代码修改过程**

在开始修改代码之前，我阅读了现有代码，特别是与报销单和借款单关联的部分。经过分析，我发现了一个关键点：原先代码的查询条件中，关联事项申请单的借款单不受同源理论约束的查询条件被注释掉了。

通过解开这个注释，并对代码中的其他查询条件进行了调整，我希望能去除掉这个限制。以下是我对代码所做的修改：

```
//修改前
if(!"2647".equals(cjkQueryVO.getTradeType())) {

    if(pk_items!=null && pk_items.length > 0){
     //参照申请单生成的报销单可以拉到期初借款单或者参照相同申请单生成的非期初借款单
     sql += " and ( zb.qcbz='N' and " + SqlUtils.getInStr("zb.pk_item", pk_items, true) + " or zb.qcbz='Y') ";
    } else if (StringUtils.isNotEmpty(pk_item)) {
     sql += " and " + SqlUtils.getInStr("zb.pk_item", new String[]{pk_item}, true) + " ";
    } else {
     //自制的报销单不能冲拉了申请单的借款单，只能冲自制的借款单
     //sql+=" and  ( zb.pk_jkbx in (select pk_jkbx from er_busitem where pk_item is null or pk_item='~'))" ;
     //关联事项申请单的借款单不受同源理论约束
     //sql+=" and  ( zb.pk_jkbx in (select pk_jkbx from er_busitem where pk_item is null or pk_item='~') or zb.pk_jkbx in (select pk_jkbx from er_busitem where srcbilltype in (select djlxbm from er_djlx where noamount= 'Y' and dr = 0 and pk_group ='"+pk_group+"' )))" ;
    }
   }


//修改后
if(!"2647".equals(cjkQueryVO.getTradeType())) {

    if(pk_items != null && pk_items.length > 0){
        // 参照申请单生成的报销单可以拉到期初借款单或者参照相同申请单生成的非期初借款单
        sql += " and zb.qcbz='N' or zb.qcbz='Y' "; // 去掉了 zb.pk_item 的拼接
    } else {
        // 自制的报销单不能冲拉了申请单的借款单，只能冲自制的借款单
        // sql+=" and  ( zb.pk_jkbx in (select pk_jkbx from er_busitem where pk_item is null or pk_item='~'))" ;
        // 关联事项申请单的借款单不受同源理论约束
         sql+=" and  ( zb.pk_jkbx in (select pk_jkbx from er_busitem where pk_item is null or pk_item='~') or zb.pk_jkbx in (select pk_jkbx from er_busitem where srcbilltype in (select djlxbm from er_djlx where noamount= 'Y' and dr = 0 and pk_group ='"+pk_group+"' )))" ;
    }
}
```

在这里，我去除了对\`[zb.pk](http://zb.pk)\_item\`的拼接，因为这段代码会对同源理论进行强制限制，而客户的业务场景要求我们不受此限制。

代码中还有一块不明白的地方，因为无开发代码经验，待和专业老师咨询后再调整；

<p><br class="smart"></p>

<p><br class="smart"></p>

<p><br class="smart"></p>
