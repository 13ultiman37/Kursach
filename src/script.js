$(document).ready(function() {
    $('.header_menu').click(function(event) {
        $('.header_menu,.menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });
    $('.js-select2').select2({
    		placeholder: "Выберите город",
    		maximumSelectionLength: 2,
    		language: "ru"
    	});
    $("#selectId").change(function(){
        $("#text").text($("#selectId option:selected").text());
        });
    $("#selectId").change(function(){
        $("#text1").text($("#selectId option:selected").text());
        });
});



