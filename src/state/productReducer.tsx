

export const initialState = {
    total: 0,
    products: []
}

const productReducer = (state: any, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_PRODUCT":
            // console.log("ADD_PRODUCT", payload)
            return {
                ...state,
                products: payload.product
            }
        case "REMOVE_PRODUCT":
            // console.log("REMOVE_PRODUCT", payload)
            return {
                ...state,
                products: payload.product
            }
        case "UPDATE_PRODUCT":
            // console.log("UPDATE_PRODUCT", payload)
            return {
                ...state,
                total: payload.total
            }

        default:
            throw new Error(`No case for type ${type}`)
    }
}

export default productReducer;