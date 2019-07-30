'use strict'


class FrontPage {

    constructor() {
        
        this.modalOpen = document.querySelector('[data-modal]');
        this.blackBgOpen = document.querySelector('[data-blackbg]');
        this.acessBtn = document.querySelector('.button-container .button-wrap');
        this.isModalOpen = false;

        this.closeBtn = document.querySelector('.close-button i');


        this.openSignIn();
        this.closeModalBtn();
    }


    openSignIn() {

        console.dir(this.blackBgOpen);
        console.log(this.acessBtn);



        this.acessBtn.addEventListener('click', () => {

            if (!this.isModalOpen) {

                

                this.blackBgOpen.style.display = "block";

                
                // time to run animation after change to display: block;
                setTimeout(() => {
                    
                    this.blackBgOpen.dataset.blackbg = "open";
                    this.modalOpen.dataset.modal = "open";
                    this.isModalOpen = true;

                }, 1)


            }

        })


    } //End



    closeModalBtn() {


        let closeBtn = document.querySelector('.close-button i');

        closeBtn.addEventListener('click', () => {

            this.modalOpen.dataset.modal = "close";
            this.blackBgOpen.dataset.blackbg = "close";
            this.blackBgOpen.style.display = "none";
            this.isModalOpen = false;

        })


    }// End


}