/**
 * Created by sarimj on 7/21/2014.
 */
Ext.define("NotesApp2.model.UserPass",{

    extend: 'Ext.data.Model',
    config:{
        idProperty:'id',

        fields:[
            {name:'id', type:'int'},
            {name:'username', type:'string'},
            {name:'title',type:'string'},
            {name:'appPassword',type:'string'}

        ]
    }

});