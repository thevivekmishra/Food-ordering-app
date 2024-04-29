import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering ", () => {
    //load header
    const header = render(
        <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>
        </StaticRouter>
        );
       
        // console.log(header);
});
test("cart should have 0 items on rendering ", () => {
    const header = render(
        <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>
        </StaticRouter>
        );
       
        // console.log(cart);
        const cart = header.getByTestId("cart");
        expect(cart.innerHTML).toBe("Cart-0 items");
});