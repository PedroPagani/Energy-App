'use stict'

class App {


    constructor() {

        this.fetchData();
    }



    fetchData() {

        console.log('opa');

        fetch('http://www.aneel.gov.br/dados/relatorios?p_p_id=dadosabertos_WAR_dadosabertosportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=gerarEmpGeracaoDistribuidaJSON&p_p_cacheability=cacheLevelPage&p_p_col_id=column-2&p_p_col_count=1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })

    }

}

const app = new App();