/**
 * Apptivity JS
 * v1.0
 * Andresito de Guzman
 * 2018
 */

customElements.define('app-activity',
    class extends HTMLElement {
        constructor(){
            super();
        }
    }
);

(function($){

    $.app = function(opts){
        if(opts){

            if(opts == "clear"){
                $("app-activity").hide();
            }

            if(opts == "show-all"){
                $("app-activity").show();
            }

            if(opts == "set-style"){
                $("app-activity").css("margin","0px");
                $("app-activity").css("width","100%");
                $("app-activity").css("height","100%");                
            }

            if(opts == "set-position"){
                $("app-activity").css("position","fixed");
            }
            
            if(opts.activity){

                $("app-activity").hide();

                if(opts.transition == "fade"){
                    $(`app-activity[name="${opts.activity}"]`).fadeIn();
                } else {
                    $(`app-activity[name="${opts.activity}"]`).show();
                }

            }

        }
    }

    $.fn.app = function(opts){

        if(opts.show == true){
            
            if(opts.transition == "fade"){
                this.fadeIn();
            } else {
                this.show();
            }

        }

        if(opts.show == false){

            if(opts.transition == "fade"){
                this.fadeOut();
            } else {
                this.show();
            }

        }

    };

}(jQuery));
