/**
 * Created by sarimj on 7/8/2014.
 */


var myGlob;

Ext.application({
    name: 'NotesApp2',
    requires:['Ext.MessageBox'],
    views:['LoginContainer','ListContainer'],               //whatever is the filename in the view folder same will be the class name.
    controllers:['LoginController','ListController'],       //whatever is the filename in the controller folder same will be the class name.
    stores:['Users','Passwords','UserPasswords'],
    models:['User','Password','UserPass'],


    launch: function(){
        //Ext.Msg.alert("Welcome to sencha sarim");



        var toDate=new Date();
        console.log("in app.js");
        var myStore=Ext.getStore('Users').load();
        var passwordStore= Ext.getStore('Passwords');
        var userPassStore= Ext.getStore('UserPasswords').load();

        var myDB=openDatabase("Sencha",'1.0',"Sencha",null,function(){alert("created")});

        var results1=[];

        /*
         userPassStore.add({username:'Sarim', title:'WhatsApp1',appPassword:'somePass1'});
         userPassStore.add({username:'Azim', title:'WhatsApp2',appPassword:'somePass2'});
         userPassStore.add({username:'Qasim', title:'WhatsApp3',appPassword:'somePass3'});
         userPassStore.add({username:'Ahsan', title:'WhatsApp4',appPassword:'somePass4'});

         userPassStore.sync();
         */

        /*
         passwordStore.add({title:'Whatsapp', password:'WA1'});
         passwordStore.add({title:'Facebook', password:'FB1'});
         passwordStore.add({title:'Twitter', password:'TW1'});
         passwordStore.sync();


         myStore.add({username:'sarim',password:'click',dateCreated: toDate});
         myStore.add({username:'usman', password:'click1'});
         myStore.add({username:'majid', password:'click2'});
         myStore.sync();
        */


        /*
        myDB.transaction(function(tx){
            tx.executeSql("select * from Password,User",[],function(tx,results){
                for(i=0; i<results.rows.length;i++)
                {
                    console.log(results.rows.item(i).id.toString()+ "---Sarim");
                    userPassStore.add({id:results.rows.item(i).id, username:results.rows.item(i).username,title:results.rows.item(i).title,appPassword:results.rows.item(i).password});
                }
                userPassStore.sync();

            });


        });
        */

        //alert(NotesApp2.myVar);

        //alert(myGlob.toString());
        if(typeof myGlob !='undefined')
        alert(myGlob.toString());

        console.log("hie");
        /*
        var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
        //var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;



            var myRequest = indexedDB.open("testDB13", 9);
            var db;

            myRequest.onupgradeneeded = function (e) {
                console.log("upgrading...");
                var thisDB= e.target.result;
                if(!thisDB.objectStoreNames.contains("FirstOS")){
                    thisDB.createObjectStore("FirstOS",{keypath: "email"});
                }

                if(!thisDB.objectStoreNames.contains("SecondOS")){
                    thisDB.createObjectStore("SecondOS",{autoincrement:true});
                }

            };

            myRequest.onsuccess = function (e) {
                console.log("success...");
                db= e.target.result;
                var transaction = db.transaction(["FirstOS"],"readwrite");
                var store= transaction.objectStore("FirstOS");
                store.add({name:"sarim",email:"some@some",created:new Date()});
                console.log("db should have been initialized in the previous statement");
            };

            myRequest.onerror = function (e) {
                console.log("error occured");
            };



        */

            //db.transaction(["FirstOS"],"readwrite").objectStore('FirstOS').add();

        /*

        var db = openDatabase('Sencha', '1.0', 'Sencha', 2 * 1024 * 1024 ,  function(){alert("created")});
        db.transaction(function (tx) {
            //tx.executeSql('CREATE TABLE sarim (id unique, text)');


            tx.executeSql('select Password.title, User.username From Password INNER JOIN User ON Password.id=User.id', [], function (tx,results){
            //    tx.executeSql('select * from Password', [], function (tx,results){
                //console.log(results.rows.length.toString());
                var i=0;
                for(i=0;i<results.rows.length;i++)
                    console.log(results.rows.item(i).title + "-->" + results.rows.item(i).username);
                console.log("Something happened");
            });
        });
        */

        /*db.transaction(function (tx) {

            tx.executeSql('select * from Password', [], function (tx,results){
                console.log(results.rows.length.toString());
                console.log("Something happened");
            });



        });
        */
        var loginContainer={xtype:"loginform"};
        var loginContainer2={xtype:"loginform"};
        var listContainer={xtype:'passwordlist'};


        Ext.Viewport.add([loginContainer,listContainer]);

    },

    myVar:'myVar'


});