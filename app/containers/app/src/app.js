import React            from 'react';


import './app.scss';

import { Header }       from '../../header';
import { Filters }       from '../../filters'
import { ProductsList } from '../../products-list';
import { Pagination }   from '../../pagination';
import { Footer }       from '../../../components/footer';
import configuration    from '../../../config.json';




export class App extends React.Component {


    render() {
        return (
            <div>
                <Header title={configuration.pageTitle}/>
                <Filters />

                <main className="product-page">
                    <div className="container">
                        <ProductsList />
                        <Pagination />
                    </div>
                </main>
                <Footer />

            </div>
        );
    }
}
