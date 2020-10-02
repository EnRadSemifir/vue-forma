const state = {
    cart: []
}

const getters = {
    cart: state => state.cart,
}

const mutations = {
    addProduct: (state, { id }) => state.cart.push({ id, quantity: 1 }),
    rmProduct: (state, { id }) => state.cart = state.cart.filter(productInCart => id !== productInCart.id),
    resetCart: state => state.cart = [],
    incrQuantity(state, { id }) {
        const cartItem = state.cart.find(item => item.id === id)
        cartItem.quantity += 1
    },
    decrQuantity(state, { id }) {
        const cartItem = state.cart.find(item => item.id === id)
        cartItem.quantity -= 1
    },
}

const actions = {
    actAddProduct: ({ state, commit }, product) => {
        console.log(state)
        const prdInCart = state.cart.find(prdInCart => prdInCart.id === product.id)
        if (!prdInCart) {
            commit('addProduct', { id: product.id })
        } else {
            commit('incrQuantity', prdInCart)
        }
    },
    actRmProduct: ({ state, commit }, { id }) => {
        const prdInCart = state.cart.find(prdInCart => prdInCart.id === product.id)
        if (prdInCart.quantity < 2) {
            commit('rmProduct', prdInCart)
        } else {
            commit('decrQuantity', prdInCart)
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}