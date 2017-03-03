/**
 * Created by sarimj on 7/9/2014.
 */
Ext.define('NotesApp2.controller.LoginController',{
    extend: 'Ext.app.Controller',

    config:{
        refs:{

            loginContainer:'loginform',                 //loginform object
            listContainer:'passwordlist'                //passwords List Container;s object
        },

        control:{
            loginContainer: {
                loginbuttoncommand: 'onLoginBtnTap'     //event for login button click
            }
        }
    },
    init: function(){
        this.callParent();
        console.log('My Controller Initialized');
    },

    launch:function(){
        Ext.getStore('Passwords').load();
        Ext.getStore('Users').load();
    },

    onLoginBtnTap : function(){
        //var usersStore=Ext.getStore('Users');

        var userName=Ext.getCmp('usernameTxt').getValue();
        var password=Ext.getCmp('passwordTxt').getValue();
        var isAuthenticated=0;
       // alert(userName + password);


        //for(i=0;i<usersStore.getCount();i++)
        //{
            if(!userName || !password){
                isAuthenticated=1;
                console.log("Breaking out of the loop : LoginController.js");
                //break;
            }
        //}


        if(isAuthenticated==1){
            Ext.Msg.alert("Logged in successfully");
            Ext.Viewport.animateActiveItem(this.getListContainer(),{type:'slide',direction:'right'});
        }
        else
        {
            Ext.Msg.alert("Incorrect username and/or password");
        }


        /*
            if(null!= usersStore.findRecord('username',userName,null,null,null,true)){
            Ext.Msg.alert('Such user exists');}
        */




    }

});