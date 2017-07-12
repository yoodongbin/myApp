Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/',{template: 'main'});

Router.route('/store', {template: 'store'});
Router.route('/movie', {template: 'movie'});
Router.route('/wagle', {template: 'wagle'});
Router.route('/detail', {path:'detail/:_id',template: 'detail'}); //template: 'detail'
