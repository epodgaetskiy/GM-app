var itemNumber = 0;

function searchCheckboxToggleState() {
	/*$(this).find('svg').toggle(100, function() {
		$(this).find('.checkbox-icon').hide();
		$(this).find('.check-icon-checked').show();
	});*/
	$('.word-checkbox').prop('checked', true);
	$('.main_word').addClass('main_word-choosed');
	searchMenuChangeState();
}

function selectWordCheckboxToggle(){
	$(this).parents('.main_word').find('.word-checkbox').prop('checked', !$(this).siblings('.word-checkbox').prop('checked'))
	$(this).parents('.main_word').toggleClass('main_word-choosed');
	searchMenuChangeState();
}

function searchMenuChangeState() {
	itemNumber = $('.word-checkbox:checked').length;
	if(itemNumber >= 1) {
		$('.main_search').css('display', 'none');
		$('.main_addNewWord_panel').css('display', 'flex');
		$('.addNewWord_panel-active-count').html(itemNumber);
	} else {
		$('.main_search').css('display', 'flex');
		$('.main_addNewWord_panel').css('display', 'none');
		$('.addNewWord_panel-active-count').html('0');
	}
}
function uncheckAllAtAddWordPanel() {
	$('.word-checkbox').prop('checked', false);
	$('.main_word').removeClass('main_word-choosed');
	searchMenuChangeState()
}

$(document).ready(function(){
	$('.main_search_checkbox').on('click', searchCheckboxToggleState);
	$('.word-checkbox-icon').on('click', selectWordCheckboxToggle);
	$('.addNewWord_panel-active > svg').on('click', uncheckAllAtAddWordPanel)


	$('.language_selector').click(function() {
		$(this).toggleClass('active');
		$(this).siblings('.languages').slideToggle(1);
	});

	$('.navbar_language-select-title').on('click', function(){
		$('.navbar_languages-select-list').toggle(1);
		$('.navbar_languages-select-list').css('display','flex');
	})
	$('.library_selectCategory').on('click', function() {
		$('.library_categories-select-list').toggleClass('active');
		$('.library_selectCategory').toggleClass('library_selectCategory-active')
	})

	$('.library-card-addButton')
	.mouseenter(function(){
		$(this).find('.library-card-tooltip').delay(500).css('display', 'flex');
	})
	.mouseleave(function() {
		$(this).find('.library-card-tooltip').css('display', 'none');
	})
	$('.main_word_item_field').on('click', function(){
		$('.slider-wrapper').toggle(1);
		$('.slider-wrapper').css('display', 'flex')
	})
	$('.modal_slider-close').on('click', function() {
		$('.slider-wrapper').css('display', 'none')
	}) 
})