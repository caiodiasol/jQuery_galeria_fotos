$(document).ready(function() {

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){          //previne o comportamento padrao do formulario quando ele é submetido//
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none" ></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div 
                class="overlay-imagens-link">
                    <a href= "${enderecoDaNovaImagem}" target= "_blank" title = "Ver imagem em tamanho real"
                        Ver imagens em tamanho real
                    </a>
            </div> 
            
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(2000);
            $('#endereco-imagem-nova').val('');
    })

});