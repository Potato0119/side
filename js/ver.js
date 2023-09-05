function select(){
    var obj=document.getElementById("sel").selectedIndex;
    //上面取得了數值
    if (obj==0){
        document.getElementById("sel_title").textContent="\xa0";
        document.getElementById("sel_t1").textContent="\xa0";
        document.getElementById("sel_t2").textContent="\xa0";
        document.getElementById("sel_t3").textContent="\xa0";
        document.getElementById("sel_t4").textContent="\xa0";
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==1){
        document.getElementById("sel_title").textContent='版本: 1.0.0';
        document.getElementById("sel_t1").textContent='基本網站架設完成';
        document.getElementById("sel_t2").textContent='放上專案:"我的AQI","猜幾A幾B"';
        document.getElementById("sel_t3").textContent="\xa0";
        document.getElementById("sel_t4").textContent="\xa0";
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==2){
        document.getElementById("sel_title").textContent='版本: 1.0.1';
        document.getElementById("sel_t1").textContent='新增"關於我"';
        document.getElementById("sel_t2").textContent='放上專案:"廢話機器人"';
        document.getElementById("sel_t3").textContent="\xa0";
        document.getElementById("sel_t4").textContent="\xa0";
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==3){
        document.getElementById("sel_title").textContent='版本: 1.0.2';
        document.getElementById("sel_t1").textContent='更新"關於我" 新增Python,Java等學習資源';
        document.getElementById("sel_t2").textContent="\xa0";
        document.getElementById("sel_t3").textContent="\xa0";
        document.getElementById("sel_t4").textContent="\xa0";
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==4){
        document.getElementById("sel_title").textContent='版本: 1.0.3';
        document.getElementById("sel_t1").textContent='放上專案:"連結數字"';
        document.getElementById("sel_t2").textContent="\xa0";
        document.getElementById("sel_t3").textContent="\xa0";
        document.getElementById("sel_t4").textContent="\xa0";
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==5){
        document.getElementById("sel_title").textContent="版本: 1.1.0";
        document.getElementById("sel_t1").textContent='新增"黑暗模式"';
        document.getElementById("sel_t2").textContent='在Python,Java學習資源上面加上hover特效';
        document.getElementById("sel_t3").textContent='在專案上新增動畫,滑鼠靠近就會有放大縮小的動畫';
        document.getElementById("sel_t4").textContent="\xa0";
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==6){
        document.getElementById("sel_title").textContent='版本: 1.1.1';
        document.getElementById("sel_t1").textContent="新增一個彩蛋";
        document.getElementById("sel_t2").textContent='新增"版本更新紀錄"';
        document.getElementById("sel_t3").textContent="\xa0";
        document.getElementById("sel_t4").textContent="\xa0";
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==7){
        document.getElementById("sel_title").textContent='版本: 1.1.2';
        document.getElementById("sel_t1").textContent='放上專案:"摩斯密碼轉換器"';
        document.getElementById("sel_t2").textContent="新增功能,在這次更新以後的更新 都會附上更新時間";
        document.getElementById("sel_t3").textContent="\xa0";
        document.getElementById("sel_t4").textContent="更新時間: 2022/5/8";
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==8){
        document.getElementById("sel_title").textContent='版本: 1.2.0';
        document.getElementById("sel_t1").textContent="新增FlagCounter";
        document.getElementById("sel_t2").textContent='更新"更新紀錄"的排版';
        document.getElementById("sel_t3").textContent='增加更多文字,使瀏覽體驗更佳';
        document.getElementById("sel_t4").textContent="因本人更換FB,所以更改網址連結";
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="更新時間: 2022/6/19";
    }
    if (obj==9){
        document.getElementById("sel_title").textContent='版本: 1.2.1';
        document.getElementById("sel_t1").textContent='修正"作品集","更新紀錄"標題切換至黑暗模式時的錯誤';
        document.getElementById("sel_t2").textContent="\xa0";
        document.getElementById("sel_t3").textContent="更新時間: 2022/6/26";
        document.getElementById("sel_t4").textContent='\xa0';
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==10){
        document.getElementById("sel_title").textContent='版本: 1.3.0';
        document.getElementById("sel_t1").textContent='放上專案:"九宮格"';
        document.getElementById("sel_t2").textContent="更改網站路徑架構,不影響瀏覽體驗";
        document.getElementById("sel_t3").textContent='更改作品集的瀏覽體驗,為了以後塞更多專案做準備';
        document.getElementById("sel_t4").textContent='\xa0';
        document.getElementById("sel_t5").textContent="更新時間: 2022/6/26";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==11){
        document.getElementById("sel_title").textContent='版本: 1.3.1';
        document.getElementById("sel_t1").textContent='更改了一點小錯誤';
        document.getElementById("sel_t2").textContent="\xa0";
        document.getElementById("sel_t3").textContent='更新時間: 2022/6/26';
        document.getElementById("sel_t4").textContent='\xa0';
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==12){
        document.getElementById("sel_title").textContent='版本: 1.3.2';
        document.getElementById("sel_t1").textContent='DNS代理商做出一些修正,本人隨之更進';
        document.getElementById("sel_t2").textContent="修補更新紀錄的選擇清單,讓使用時效果更佳";
        document.getElementById("sel_t3").textContent='\xa0';
        document.getElementById("sel_t4").textContent='更新時間: 2022/7/21';
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==13){
        document.getElementById("sel_title").textContent='版本: 1.3.3';
        document.getElementById("sel_t1").textContent='更改FB連結';
        document.getElementById("sel_t2").textContent="刪除FlagCounter";
        document.getElementById("sel_t3").textContent='繼續配合DNS代理商做出的更改';
        document.getElementById("sel_t4").textContent='\xa0';
        document.getElementById("sel_t5").textContent="更新時間: 2022/7/24";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==14){
        document.getElementById("sel_title").textContent='版本: 2.0.0';
        document.getElementById("sel_t1").textContent='-----新增-----';
        document.getElementById("sel_t2").textContent="新增網站背景";
        document.getElementById("sel_t3").textContent='新增Header(最上面那個)跟公佈欄';
        document.getElementById("sel_t4").textContent='新增更新紀錄的第六行(原本為五行)';
        document.getElementById("sel_t5").textContent='\xa0';
        document.getElementById("sel_t6").textContent="更新時間: 2022/7/29";
    }
    if (obj==15){
        document.getElementById("sel_title").textContent='版本: 2.0.0';
        document.getElementById("sel_t1").textContent='-----更改-----';
        document.getElementById("sel_t2").textContent="更改米老鼠頭像";
        document.getElementById("sel_t3").textContent='更改更新紀錄的排版';
        document.getElementById("sel_t4").textContent='更改一開始的介面,變得更好看(有嗎??)';
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="更新時間: 2022/7/29";
    }
    if (obj==16){
        document.getElementById("sel_title").textContent='版本: 2.0.0';
        document.getElementById("sel_t1").textContent='-----刪除-----';
        document.getElementById("sel_t2").textContent="刪除黑暗模式";
        document.getElementById("sel_t3").textContent='刪除捲動條(僅針對Chrome跟Safari)';
        document.getElementById("sel_t4").textContent='刪除"我們米老鼠 是這樣被你們欺負的嗎"的影片連結';
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="更新時間: 2022/7/29";
    }
    if (obj==17){
        document.getElementById("sel_title").textContent='版本: 2.0.1';
        document.getElementById("sel_t1").textContent='修正"關於我"的錯誤';
        document.getElementById("sel_t2").textContent="\xa0";
        document.getElementById("sel_t3").textContent='更新時間: 2022/7/30';
        document.getElementById("sel_t4").textContent='\xa0';
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==18){
        document.getElementById("sel_title").textContent='版本: 2.0.2';
        document.getElementById("sel_t1").textContent='更新頭像';
        document.getElementById("sel_t2").textContent="\xa0";
        document.getElementById("sel_t3").textContent='更新時間: 2022/11/7';
        document.getElementById("sel_t4").textContent='(笑死三個月沒更新了 我對不起社會大眾對我的期待)';
        document.getElementById("sel_t5").textContent="(雖然不會有人對我有期待就是了)";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==19){
        document.getElementById("sel_title").textContent='版本: 3.0.0';
        document.getElementById("sel_t1").textContent='整個網站重寫';
        document.getElementById("sel_t2").textContent="\xa0";
        document.getElementById("sel_t3").textContent='更新時間: 2022/12/10';
        document.getElementById("sel_t4").textContent='\xa0';
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==20){
        document.getElementById("sel_title").textContent='版本: 3.1.0';
        document.getElementById("sel_t1").textContent='新增了"設定"功能';
        document.getElementById("sel_t2").textContent="新增一堆照片";
        document.getElementById("sel_t3").textContent='新增"清除快取教學"';
        document.getElementById("sel_t4").textContent='\xa0';
        document.getElementById("sel_t5").textContent="更新時間: 2023/01/07";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==21){
        document.getElementById("sel_title").textContent='版本: 3.1.1';
        document.getElementById("sel_t1").textContent='更改"設定"介面';
        document.getElementById("sel_t2").textContent='更改"清除快取教學"介面';
        document.getElementById("sel_t3").textContent='\xa0';
        document.getElementById("sel_t4").textContent='更新時間: 2023/01/08';
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==22){
        document.getElementById("sel_title").textContent='版本: 3.1.2';
        document.getElementById("sel_t1").textContent='新增一句話到首頁';
        document.getElementById("sel_t2").textContent='\xa0';
        document.getElementById("sel_t3").textContent='更新時間: 2023/01/08';
        document.getElementById("sel_t4").textContent='\xa0';
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==23){
        document.getElementById("sel_title").textContent='版本: 3.1.3';
        document.getElementById("sel_t1").textContent='改頭像';
        document.getElementById("sel_t2").textContent='\xa0';
        document.getElementById("sel_t3").textContent='更新時間: 2023/02/16';
        document.getElementById("sel_t4").textContent='\xa0';
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==24){
        document.getElementById("sel_title").textContent='版本: 3.1.4';
        document.getElementById("sel_t1").textContent='新增專案:blackjack(21點)';
        document.getElementById("sel_t2").textContent='新增15張天空照片';
        document.getElementById("sel_t3").textContent='\xa0';
        document.getElementById("sel_t4").textContent='更新時間: 2023/04/02';
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
    if (obj==25){
        document.getElementById("sel_title").textContent='版本: 3.2.0';
        document.getElementById("sel_t1").textContent='做了全面維護';
        document.getElementById("sel_t2").textContent='重新上架網站';
        document.getElementById("sel_t3").textContent='\xa0';
        document.getElementById("sel_t4").textContent='更新時間: 2023/09/05';
        document.getElementById("sel_t5").textContent="\xa0";
        document.getElementById("sel_t6").textContent="\xa0";
    }
}