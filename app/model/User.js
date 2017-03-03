/**
 * Created by sarimj on 7/9/2014.
 */
Ext.define("NotesApp2.model.User",
{
    extend:'Ext.data.Model',
    config:{
        idProperty:'id',
        fields:[
            {name: 'id', type:'int'},
            {name:'username', type:'string'},
            {name:'password', type:'string'},
            {name:"dateCreated", type:'date',dateFormat:'c'}
        ]
    }
});