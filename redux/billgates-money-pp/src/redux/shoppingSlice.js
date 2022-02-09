import { createSlice } from '@reduxjs/toolkit'

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState: {

        mainCash: 100000000000,
        totalExp:0,

        items: [
            {
                image: "https://www.mcdonalds.com.tr/Files/Urunler-Kare/7422dbf9-200d-40c3-9fcf-338b27888d63-bigmactek.png",
                name: "BigMac",
                price: 2,
                number: 10,
                buyNbr: 0,
                id:0,
            },
            {
                image: "https://static.wixstatic.com/media/8b7b34_c724fada1a8842e09c4a4402a5629838~mv2.png/v1/fill/w_500,h_500,al_c,q_90,usm_0.66_1.00_0.01/8b7b34_c724fada1a8842e09c4a4402a5629838~mv2.webp",
                name: "MOCHACINO",
                price: 5,
                number: 100,
                buyNbr: 0,
                id:1,
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQrqB2fj3qLc3fW2On8-0CZEeEV_S1c3Q9H8j7N2HtDkrRIAbQ9h7CFGKbjzRtwKtPAkTIBWj0LZ2ddcXBP7EHvNFXFxl95Cg&usqp=CAE",
                name: "Freshbox",
                price: 7,
                number: 20,
                buyNbr: 0,
                id:2,
            },
            {
                image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXIgMqSVv8r9v_J_SHDFjS3BrzDEpFOCjsrEkUpu4pO8slpH0fVf7w-WwnSoxjfFVVJK4_npUQjRkH9AlaVQhmLRXAlJD6YZp2Sn-Dgtgc11q1OdDdXY1G&usqp=CAE",
                name: "İphone 8",
                price: 11,
                number: 28,
                buyNbr: 0,
                id:3,
            },
            {
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTG8lzr_Ge6EyBEFLs8PYoDS-WhHNNaI3Nrt1haBbBRHHmY1ISSVznKu85P1IdpKB86hW_HBb37aSHcZpH79Tq-hsCtGi8y&usqp=CAE",
                name: "Xbox",
                price: 20,
                number: 23,
                buyNbr: 0,
                id:4,
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREFwzCzV1-flXws7NDaJFvnBSDY8ns_173SigNkAl5IlQ7-P4LHcQG_3hFkERsWVhoBZiNw6kPw20tELNyAOkqOJnsPrsU1w&usqp=CAE",
                name: "Mbw XROW-600A",
                price: 8,
                number: 17,
                buyNbr: 0,
                id:5,
            },
        ],
    },
    reducers: {

        setShopping: (state, action) => {

            const data = (action.payload);
            const item = data[0];
            const prs = data[1];
            const id = item.id;

            state.items[id].number = state.items[id].number + prs;
            state.mainCash = state.mainCash + prs * item.price;
            state.totalExp = state.totalExp - prs * item.price;

            if(prs == -1)
            {
                state.items[id].buyNbr += 1;
            }
            else
            {
                state.items[id].buyNbr -= 1;
            }

        }

    }
})


export const { setShopping } = shoppingSlice.actions;
export default shoppingSlice.reducer
