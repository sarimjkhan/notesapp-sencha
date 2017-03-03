/**
 * Created by sarimj on 7/17/2014.
 */
Ext.define('NotesApp2.controller.ListController',{
   extend:'Ext.app.Controller',

    config:{
        refs:{
            listContainer:'passwordlist',
            loginContainer:'loginform'
        },
        control:{
            listContainer:{
                passwordsListDiscloseTap:'onDiscloseTap'
            }

        }
    },

    init: function(){
        this.callParent();
        console.log('My Controller Initialized');
    },

    launch:function(){
        //Ext.getStore('Passwords').load();
        Ext.getStore('Users').load();
        //Ext.getStore('UserPasswords').load();

        /*userPassStore=Ext.getStore('UserPasswords').load();
        userPassStore.add({username:'Sarim', title:'WhatsApp1',appPassword:'somePass1'});
        userPassStore.add({username:'Azim', title:'WhatsApp2',appPassword:'somePass2'});
        userPassStore.add({username:'Qasim', title:'WhatsApp3',appPassword:'somePass3'});
        userPassStore.add({username:'Ahsan', title:'WhatsApp4',appPassword:'somePass4'});

        userPassStore.sync();*/
    },
    onDiscloseTap:function(list,record){
        Ext.Viewport.animateActiveItem(this.getLoginContainer(),{type:'slide', direction:'right'});
        console.log('Disclosure Tapped');
    }
});