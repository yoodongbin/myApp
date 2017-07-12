Template.detail.helpers({
    data: function () {
        
      
var board=CollectionBoard.findOne({_id:
                                   
       Router.current().params._id});
        console.log(board);
//        console.log(board.글번호); 이런식으로도 가능 !!!, 따로 따로 구분해서 볼 수 있음
        return board
    
    }

});