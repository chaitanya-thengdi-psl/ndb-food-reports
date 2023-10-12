// NOTE:
// These type definitions are not definitive - they vary both by the API called: 
// (foods/search or food/{fdcId}) and the result itself (i.e. what food it is).
// These are based on one response only which *should* work for the fields that we want to use.
type FoodNutrient = {
    nutrientId: number;
    nutrientName: string;
    nutrientNumber: string;
    unitName: string;
    derivationCode: string;
    derivationDescription: string;
    derivationId: number;
    value: number;
    foodNutrientSourceId: number;
    foodNutrientSourceCode: string;
    foodNutrientSourceDescription: string;
    rank: number;
    indentLevel: number;
    foodNutrientId: number;
};

type FoodUpdateLog = {
    discontinuedDate: string;
    foodAttributes: any [];
    fdcId: number;
    description: string;
    publicationDate: string;
    dataType: string;
    foodClass: string;
    modifiedDate: string;
    availableDate: string;
    brandOwner: string;
    brandName: string;
    dataSource: string;
    brandedFoodCategory: string;
    gtinUpc: string;
    ingredients: string;
    marketCountry: string;
    servingSize: number;
    servingSizeUnit: string;
    packageWeight: string;
};

type Food = {
    discontinuedDate: string;
    foodComponents: any [];
    foodAttributes: any [];
    foodPortions: any [];
    fdcId: number;
    description: string;
    publicationDate: string;
    foodNutrients: FoodNutrient [];
    dataType: string;
    foodClass: string;
    modifiedDate: string;
    availableDate: string;
    brandOwner: string;
    dataSource: string;
    brandedFoodCategory: string;
    gtinUpc: string;
    householdServingFullText: string;
    ingredients: string;
    marketCountry: string;
    servingSize: number;
    servingSizeUnit: string;
    foodUpdateLog: FoodUpdateLog [];
    labelNutrients: {
        fat: NumberValue;
        saturatedFat: NumberValue;
        transFat: NumberValue;
        cholesterol: NumberValue;
        sodium: NumberValue;
        carbohydrates: NumberValue;
        fiber: NumberValue;
        sugars: NumberValue;
        protein: NumberValue;
        calcium: NumberValue;
        iron: NumberValue;
        potassium: NumberValue;
        calories: NumberValue
    }
}

type NumberValue = {
    value: number;
}

export default Food;