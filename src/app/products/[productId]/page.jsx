const DynamicPage = ({ params, searchParams }) => {
  console.log(params);
  console.log(searchParams);
  return (
    <div>
      <h2>Dynamic product page {params.productId}</h2>
      <h2>Type Serch is {searchParams.productId} </h2>
    </div>
  );
};

export default DynamicPage;
