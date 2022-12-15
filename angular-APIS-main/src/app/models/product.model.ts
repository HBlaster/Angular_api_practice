export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
}

//Omit: omitir los aributos señalados
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}
//Partial todos los atributos son opcionales
export interface UpdateProductDTO extends Partial<CreateProductDTO> {
  
}
