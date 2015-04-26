Application = new Backbone.Marionette.Application();

Application.addRegions({
    mainRegion: '#content',
    mainRegion2: '#content2'
});

Player = Backbone.Model.extend({});

Players = Backbone.Collection.extend({
    model: Player
});

PlayerView = Backbone.Marionette.ItemView.extend({
    tagName: 'tr',
    className: 'player',
    template: _.template("<%=name%>")
});

PlayersView = Backbone.Marionette.CompositeView.extend({
    tafName: 'table',
    className: "table-striped table-bordered",
    id: 'players',
    childView: PlayerView,
    childViewContainer: "tbody",
    template: _.template('<thead><tr class="header"><th>Name</th></tr></thead><tbody id="tbody"></tbody>')
    //initialize: function () {
    //    this.listenTo(this.collection, "change", this.render);
    //},
    //appendHtml: function (collectionView, itemView) {
    //    collectionView.$('tbody').append( new PlayerView().render().$el);
    //}
});

Application.addInitializer(function (option) {
    var playersView = new PlayersView({
        collection: option.players
    });
    var playersView1 = new PlayersView({
        collection: option.players
    });
    Application.mainRegion2.show(playersView1);
    Application.mainRegion.show(playersView);
});

$(document).ready(function () {
    var players = new Players([
        {name: 'player rf1'},
        {name: 'player er2'},
        {name: 'player 433'},
        {name: 'player 4353'},
        {name: 'player 5433'},
        {name: 'player 5343'},
        {name: 'player 4353'}
    ]);

    Application.start({players: players});
});