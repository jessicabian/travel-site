/**
 * Created by JBI on 6/26/2017.
 */
import $ from 'jquery';

class MobileMenu{
    constructor(){
        $(".site-header__menu-icon").click(function(){
            console.log("the top right icon.");
        });
    }
}

export default MobileMenu;