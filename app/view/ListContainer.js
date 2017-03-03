/**
 * Created by sarimj on 7/14/2014.
 */
Ext.define('NotesApp2.view.ListContainer',
    {
        extend:'Ext.Container',
        alias:'widget.passwordlist',
        fullscreen:true,

        requires: [
            'Ext.dataview.List'
        ],


        initialize:function()
        {
            console.log("at List Container start");
            this.callParent(arguments);

            var listContainer= //Ext.create('Ext.List',
             { xtype: 'list',
                   // id:'notesListID',
               onItemDisclosure:true,
               scrollable:true,
               loadingText:'Loading..',
               autoLoad:true,
               scrollToTopOnRefresh:false,

               //flex:1,
               emptyText:'No Users found',
               fullscreen:true,
               store: Ext.getStore('Passwords'),

               itemTpl: '<pre><div class="list-item-title">{id}</div>' +
                   '<pre><div class="list-item-title">{title}</div>' +
                        '<div class="list-item-narrative">{appPassword}</div>' +

                        '</pre>',
               listeners:{
                        disclose:{fn: this.onDiscloseButtonTap, scope:this},
                        painted:{fn: this.onPainted, scope:this}
               },

               plugins:[
                   {
                       xclass:'Ext.plugin.ListPaging',
                       autoPaging:true

                   }
               ]

            };//);

            //var mySt=Ext.getStore('Passwords');
            //mySt.addBeforeListener('load',this.isListEnd,this);



            this.add([listContainer]);


        },
        config: {
            layout: {
                type: 'card'
            }
        },

        onDiscloseButtonTap: function(list,record,target,index,evt,options){
            this.fireEvent('passwordsListDiscloseTap',this,record);
        },
        onPainted:function(){ // to load the data from store whn it comes on screen
            //Ext.getStore('Passwords').load();
            //Ext.getStore('UserPasswords').load();
        },

        isListEnd: function (store, records, isSuccessful) {


            var pageSize = store.getPageSize(),
                pageIndex = store.currentPage - 1;


            if (isSuccessful && records.length < pageSize) {

                var totRecords = pageIndex * pageSize + records.length;
                console.log(records.length.toString()+ "  " + totRecords.toString());
                store.setTotalCount(totRecords);
            }
            else {
                store.setTotalCount(null);
            }

            //console.log(store.getTotalCount());
            //store.setTotalCount(null);
        }


    });