    import { Routes } from '@angular/router';
    import { ProductList } from './products/product-list/product-list';
    import { Home } from './home/home/home';
    import { Signin } from './auth/signin';
    import { ProductDetailComponent } from './products/product-detail/product-detail';

    export const routes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: Home },
        { path: 'products', component: ProductList },
        { path: 'signin', component: Signin },
        { path: 'product/:id', component: ProductDetailComponent }
    ];
