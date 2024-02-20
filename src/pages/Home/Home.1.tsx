// import ListProductComponent from "./listProductComponent";
// import { Box, Typography } from "@mui/material";
// import { useSelector } from "react-redux";
// import { RootState } from "../../features/Redux/Store/store";

// export const Home = () => {
//   const listProduct = useSelector(
//     (state: RootState) => state.reducer.productSlice.listProduct
//   );

//   const listNewProduct = listProduct.filter((item) =>
//     item.state.includes("new")
//   );
//   console.log(listNewProduct);
//   const listPopularProduct = listProduct.filter((item) => item.buy > 50);
//   console.log(listPopularProduct);

//   // category
//   const categories = useSelector(
//     (state: RootState) => state.reducer.categorySlice.categories
//   );
//   console.log(categories);

//   return (
//     <div style={{ width: "100%" }}>
//       <div style={{ height: "50px", backgroundColor: "red" }}>
//         Lưu Bá Ngọc {/* Header (ngoc) */}
//       </div>
//       {/* category */}
//       <Box>
//         <listCategory />
//       </Box>

//       <div className="my-5">
//         <Box alignContent="center" sx={{ marginTop: 10 }}>
//           <Box display="flex" justifyContent="center">
//             <Typography component={"span"} align="center" color="primary">
//               Discover lots new products
//             </Typography>
//           </Box>
//           <Box display="flex" justifyContent="center" sx={{ margin: "20px 0" }}>
//             <Typography variant="h4" align="center" fontWeight="bold">
//               Feature collection
//             </Typography>
//           </Box>
//           <ListProductComponent
//             listProduct={listNewProduct}
//           ></ListProductComponent>
//         </Box>
//       </div>

//       <div style={{ height: "50px", backgroundColor: "white" }}>
//         {" "}
//         Của ai nhận đi !{/*Organic and safe clothes set for your baby  */}
//       </div>

//       <div className="my-5">
//         <Box alignContent="center" sx={{ marginTop: 10 }}>
//           <Box display="flex" justifyContent="center">
//             <Typography component={"span"} align="center" color="primary">
//               Hots and bestsellers on this week
//             </Typography>
//           </Box>
//           <Box display="flex" justifyContent="center" sx={{ margin: "20px 0" }}>
//             <Typography variant="h4" align="center" fontWeight="bold">
//               Popular products
//             </Typography>
//           </Box>
//           <ListProductComponent
//             listProduct={listPopularProduct}
//           ></ListProductComponent>
//         </Box>
//       </div>

//       <div style={{ height: "50px", backgroundColor: "blue" }}>
//         {/* Tips and articles (phu)*/}
//       </div>

//       <div style={{ height: "50px", backgroundColor: "pink" }}>
//         {/* Our instagram (thuyet) */}
//       </div>

//       <div style={{ height: "50px", backgroundColor: "blue" }}>
//         {/* footer */}
//       </div>
//     </div>
//   );
// };
