import { defineAstroPaperConfig } from "./src/types/config";
export default defineAstroPaperConfig({
 site: {url:"https://aymanajal.github.io/blog/",title:"王依民",description:"ERP 实施、AI 应用与自动化的实践记录",author:"王依民",profile:"https://github.com/aymanajal",ogImage:"favicon.svg",lang:"zh-CN",timezone:"Asia/Shanghai",dir:"ltr"},
 posts:{perPage:10,perIndex:5},
 features:{lightAndDarkMode:true,dynamicOgImage:false,showArchives:true,showBackButton:true,editPost:{enabled:false},search:"pagefind",toc:true},
 socials:[{name:"github",url:"https://github.com/aymanajal"},{name:"mail",url:"mailto:wangyimin1021@gmail.com"}],shareLinks:[]
});
