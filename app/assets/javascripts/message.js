$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="message">
          <div class="message-upper">
            <div class="message-upper__talker">
              ${message.name}
            </div>
            <div class="message-upper__date">
              ${message.date}
            </div>
          </div>
          <div class="massege-text">
            <p class="massege-text__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
        `<div class="message">
          <div class="message-upper">
            <div class="message-upper__talker">
              ${message.name}
            </div>
            <div class="message-upper__date">
              ${message.date}
            </div>
          </div>
          <div class="massege-text">
            <p class="massege-text__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
    .always(function(){
      $('.form__send').prop('disabled', false);
    })
  })
})