/**
 * Created by sarimj on 7/8/2014.
 */
Ext.define("NotesApp2.view.LoginContainer",{

    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',
    config: {
        layout: {
            type: 'fit'
        },
        scrollable: "true"
        /*
         If you define a class add properties to itz config,
         If you initialize a class i.e Ext.create then add the properties directly
         */

    },


    fullscreen:'true',

    initialize:function(){
        this.callParent(arguments);

            var appLogo = {
                xtype: "label",
                html: "<b><center>Password Manager</center></b><hr>",
                docked: 'top'
            };

            var loginFieldSet = {
                xtype: 'fieldset',
                title: 'Login',
                instructions: 'Please login with your username and password',

                items: [
                    {xtype: 'textfield', label: 'UserName', id: 'usernameTxt'},
                    {xtype: 'passwordfield', label: 'Password', id: 'passwordTxt'},
                    {xtype: 'button', text: "Login", id: 'loginBtn', handler: this.onLoginTap, scope: this}
                ]

            };

            this.add([appLogo, loginFieldSet]);
        console.log("At login view end");
    },

    onLoginTap:function(){
        //Ext.Msg.alert("Login btn clicked");
        this.fireEvent("loginbuttoncommand",this);
    }

});