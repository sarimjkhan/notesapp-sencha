/**
 * Created by sarimj on 7/9/2014.
 */
Ext.define('NotesApp2.store.Users',{
    extend: 'Ext.data.Store',
    config:{
        model: 'NotesApp2.model.User',
        //defaultRootProperty:'users',
        storeId:'Users',
        autoSync:true,
        autoLoad:true,
        proxy:{
            type:'sql',
            id:'userid'

        }
    }
});