import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Combine from './Combine.jsx'
import { ProductProvider } from '../context/ProductContext.jsx'
import { CurrencyProvider } from '../context/CurrencyContext.jsx'
import { ThemeProvider } from '../context/ThemeContext.jsx'
import { CartProvider } from 'react-use-cart'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <ThemeProvider> 
        <CurrencyProvider>
          <ProductProvider>
            <Combine/>
          </ProductProvider>
        </CurrencyProvider>
      </ThemeProvider>
    </CartProvider>
  </StrictMode>
)
