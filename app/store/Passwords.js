/**
 * Created by sarimj on 7/17/2014.
 */
Ext.define('NotesApp2.store.Passwords',{
   extend: 'Ext.data.Store',
    config:{
        model: 'NotesApp2.model.Password',
        autoSync:true,
        autoLoad:true,
        storeId:'Passwords',
        proxy:{
                type: 'sql',
                id: 'passwordID'
        },
        remoteFilter:true,
        remoteSort:true,

        reader:{
            type:'json',
            pageParam:'page',
            totalProperty:"total_results"
        },
        //clearOnPageLoad:false,
        pageSize:10,

        listeners: {
            load: function(store,records,successful,operation,eopts){

                //for(var i=0;i<store.getAllCount();i++)
                //console.log('id: '+ store.getAt(i).get('id') + ', title:' + store.getAt(i).get('title'));
                console.log("count,totalCount,getTotalCount,getAllCount");
                console.log(store.getCount() + " ");
                //console.log(store.totalCount.toString() + " ");
                console.log(store.getTotalCount() + " ");
                console.log(store.getAllCount() + " ");




                //console.log("sarim");
                //store.setTotalCount(null);
            },

            beforeLoad:function(store,operation,eopts){
                /*console.log(store.getAllCount());
                console.log(store.getCount());
                console.log("sarim");*/
            },

            refresh:function(store,data,eopts){
                /*console.log("sarim");
                for(var i=0;i<store.getAllCount();i++)
                    console.log('id: '+ store.getAt(i).get('id') + ', title:' + store.getAt(i).get('title'));*/
            }
        }
    }






});