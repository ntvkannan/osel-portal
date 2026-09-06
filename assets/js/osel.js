// Login show form
function showForm(formId, column = 'one-column'){
    const formWr = document.querySelector('.form-wr');
    const allForms = document.querySelectorAll('.form-container');
    const showForm = document.getElementById(formId);

    formWr.classList.remove('hide-forms');

    allForms.forEach( form => {
        form.classList.remove('active');
        formWr.classList.remove('two-column');
    });

    if(column === 'two-column'){
        showForm.classList.add('active');
        formWr.classList.add('two-column');
    } else {
        showForm.classList.add('active', 'one-column');
        formWr.classList.remove('two-column');
    }
    
}

// Login hide form
function hideForms(){ 
    const allForms = document.querySelectorAll('.form-container');
    const formWr = document.querySelector('.form-wr');
    console.log(formWr);

    allForms.forEach( form => {
        form.classList.remove('active');
    });
    
   formWr.classList.add('hide-forms');
}

// Toggle side bar
const menuToggle = document.getElementById('toggle-sidebar');
const sideBar = document.querySelector('.side-bar');

if(menuToggle){
    menuToggle.addEventListener('click', function(){
        sideBar.classList.toggle('show');
    });
}

$(document).ready(function(){
    // Add clear text button for search field
    $('.search .input-group')
        .after(`
            <div class="icon-box clear-txt-btn">
                <span class="material-symbols-outlined">close_small</span>
            </div>
        `);

    // Toggle clear text button
    $('.search .form-control').on('input', function(){
        if($(this).val().length > 2){
            $('.clear-txt-btn').show()
        } else {
            $('.clear-txt-btn').hide()
        }
    });

    // Clear search text
    $('.clear-txt-btn').on('click', function(){
        $('.search .form-control').val('');
        $(this).hide()
    });


    // While modal open
    $('.modal').on('show.bs.modal', event => {
        $('.dropdown-menu').removeClass('show');
    })

    $('.modal').on('hide.bs.modal', event => {
        $('.dropdown-menu').removeClass('show');
        $('.func-view-diplay-btn').removeClass('highlight');
        $('.func-view-media-btn').removeClass('highlight');
    })

    $('.dropdown-item').on('click', function(){
        // Display
        $(this).closest('.func-view-diplay-btn').addClass('highlight');
        // Layout
        $(this).closest('.func-view-media-btn').addClass('highlight');
    });


    ///// To show view display poupp
    // $('.func-view-diplay-btn').click(function(){
    //     showDisplayView();
    //     $(this).addClass('highlight');
    // });

    // $('.func-hide-popup-btn').click(function(){
    //     hideDisplayView();
    //     $('.func-view-diplay-btn').removeClass('highlight');
    // });

});
