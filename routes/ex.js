// Define stage to add convertedPrice and convertedQty fields with the converted price and qty values
// If price or qty values are missing, the conversion returns a value of decimal value or int value of 0.
// If price or qty values cannot be converted, the conversion returns a string

priceQtyConversionStage = {
  $addFields: {
    convertedPrice: {
      $convert: {
        input: "$price",
        to: "decimal",
        onError: "Error", 
        onNull: NumberDecimal("0")
      }
    },
     convertedQty: { $convert: {
        input: "$qty", to: "int",
        onError:{$concat:["Could not convert ", {$toString:"$qty"}, " to type integer."]},
        onNull: NumberInt("0")
     } },
  }
};

totalPriceCalculationStage = {
  $project: { totalPrice: {
    $switch: {
       branches: [
         { case: { $eq: [ { $type: "$convertedPrice" }, "string" ] }, then: "NaN" },
         { case: { $eq: [ { $type: "$convertedQty" }, "string" ] }, then: "NaN" },
       ],
       default: { $multiply: [ "$convertedPrice", "$convertedQty" ] }
    }
} } };

db.orders.aggregate( [
  priceQtyConversionStage,
  totalPriceCalculationStage
])