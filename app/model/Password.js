/**
 * Created by sarimj on 7/9/2014.
 */
Ext.define('NotesApp2.model.Password',
{
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'id',

        fields: [
            {name: 'id', type: 'int'},
            {name:'userID',type:'int'},
            {name: 'title', type: 'string'},
            {name: 'password', type: 'string'}
        ]
    }
});