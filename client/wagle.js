

//<!--작성이라는 이름이 클릭되면이렇게 하렴-->
Template.wagle.events({

    'click [name=submit]': function(e, tmpl)
    //    function옆에 파라미터 안써줘도 상관없음
    {
        //        console.log(document.getElementsByName("title")[0].value)
        //        console.log(document.getElementsByName("num")[1].value)
        //        console.log(document.getElementsByName("count")[2].value)
        //        console.log(document.getElementsByName("content")[3].value)

        var title = $('[name=title]').val()
        var num = $('[name=num]').val()
        var count = $('[name=count]').val()
        var content = $('[name=content]').val()

        var obj={
            '제목':title,
            '글번호':num,
            '조회수':count,
            '내용':content 
        }
        //        1.입력이라면
        if($('[name=hidden-id]').val().length <= 0) {
            console.log(obj);
            CollectionBoard.insert(obj);

            $('[name=title]').val('');
            $('[name=num]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
            $('[name=hidden-id]').val('');


        } 
        //        2.수정이라면
        else {
            CollectionBoard.update($('[name=hidden-id]').val(),{$set:obj});
            $('[name=title]').val('');
            $('[name=num]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
            $('[name=hidden-id]').val('');


        }


    },
    //지우는 기능을 담당하는 이벤트
    'click [name=deleteBoard]': function(element, tmpl)
    {
        var id=$(element.target).attr('id');
        CollectionBoard.remove({_id:id});

        console.log($(element.target).attr('id'));
        console.log('삭제되었습니다.');
    },
    'click [name=updateBoard]': function(e, tmpl) {
        console.log('수정되었습니다.');
        //        1.입력모달을 띄운다.
        $('#modal-div').modal('show');
        //        2.모달이 인풋창에 기존 데이터를 채워넣는다.
        //        console.log(this._id);
        //        console.log(this.글번호);
        //        console.log(this.조회수);
        //        console.log(this.제목);
        //        console.log(this.내용);

        $('[name=hidden-id]').val(this._id);
        $('[name=num]').val(this.글번호);
        $('[name=count]').val(this.조회수);
        $('[name=title]').val(this.제목);
        $('[name=content]').val(this.내용);

    }
});


Template.wagle.helpers({
    list: function () {
        var result = CollectionBoard.find().fetch()
        console.log(result)
        //        [
        //            {
        //                '글번호': 1,
        //                '제목':"영화관람권으로 예매하는 방법",
        //                '조회수':578
        //            },
        //            {
        //                '글번호': 2,
        //                '제목':"문화상품권으로 예매하는 방법",
        //                '조회수':394
        //            },
        //            {
        //                '글번호': 3,
        //                '제목':"극장 내 식음료 반입",
        //                '조회수':264
        //            },
        //            {
        //                '글번호': 4,
        //                '제목':"스토어에서 포인트 사용 안내",
        //                '조회수':189
        //            }
        //
        //        ]
        //Template.wagle.helpers({
        //    list: function () {
        //        var result = [
        //            {
        //                '글번호': 1,
        //                '제목':"영화관람권으로 예매하는 방법",
        //                '조회수':578
        //            },
        //            {
        //                '글번호': 2,
        //                '제목':"문화상품권으로 예매하는 방법",
        //                '조회수':394
        //            },
        //            {
        //                '글번호': 3,
        //                '제목':"극장 내 식음료 반입",
        //                '조회수':264
        //            },
        //            {
        //                '글번호': 4,
        //                '제목':"스토어에서 포인트 사용 안내",
        //                '조회수':189
        //            }
        //
        //        ]
        return result
    }
});