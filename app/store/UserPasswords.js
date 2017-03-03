/**
 * Created by sarimj on 7/21/2014.
 */
Ext.define("NotesApp2.store.UserPasswords",{

    extend: 'Ext.data.Store',
    requires:'Ext.data.proxy.LocalStorage',
    config:{
        model:'NotesApp2.model.UserPass',
        autoSync:true,
        autoLoad:true,
        storeId:'UserPasswords',
        reader:{
            type:'json',
            pageParam:'page'
        },
        pageSize:15

        /*proxy:{
            type:'sql',
            id:'User-Passs'

        }*/
        /*data:[
            {username:'Sarim',title:'whatsapp',appPassword:'hello'},
            {username:'Sarim1',title:'whatsapp1',appPassword:'hello1'},
            {username:'Sarim2',title:'whatsapp2',appPassword:'hello2'},
        ]
        */

    }
});