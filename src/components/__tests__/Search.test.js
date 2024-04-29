import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "./data";
import store from "../../utils/store";
import Body from "../Body";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => { 
            return Promise.resolve(RESTAURANT_DATA);
        },
    });
});

// test("Search result on homepage", () => {
//     const body = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Body />
//             </Provider>
//         </StaticRouter>
//     );
//     const search = body.getByTestId("search-btn")
// });

test("shimmer on homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    const search = body.getByTestId("shimmer")
    console.log(shimmer);
});

// incomplete code