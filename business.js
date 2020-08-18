

/* This variable represent SQL query of the baseline DB 
SQL: [ SELECT * FROM Baseline ]
Result: [ {id, Party_Entity, Client_ID, AP_ID, Barclay_Entity...}, {id, Party_Entity, Client_ID, AP_ID, Barclay_Entity...} ] */
const baselineCustomParam;

/* This variable represent SQL query of the vendor result 
SQL: [ SELECT * FROM Vendor_Result ]
Result: [ {id, Party_Entity, Client_ID, AP_ID, Barclay_Entity...}, {id, Party_Entity, Client_ID, AP_ID, Barclay_Entity...} ] */
const vendorResultCustomParam;

 
let outputs = baselineCustomParam.foreach(baseLineItem => {
    let vendorItem = vendorResultCustomParam.find(item => item.client_ID === itemBase.client_ID);

    return {
        client_ID: item.client_ID,
        ECF_ID: textSimilarityModel(baseLineItem.ECF_ID, vendorItem.ECF_ID),
        party_entity: textSimilarityModel(baseLineItem.party_entity, vendorItem.party_entity),
        Document_Type_x: textSimilarityModel(baseLineItem.Document_Type_x, vendorItem.Document_Type_x),
        filepath: textSimilarityModel(baseLineItem.filepath, vendorItem.filepath),
        Counterparty_Is: textSimilarityModel(baseLineItem.Counterparty_Is, vendorItem.Counterparty_Is),
        Amendment_To: textSimilarityModel(baseLineItem.Amendment_To, vendorItem.Amendment_To),
        Master_Agreement_Date: textSimilarityModel(baseLineItem.Master_Agreement_Date, itemBase.Master_Agreement_Date),
        Document_Type_y: textSimilarityModel(baseLineItem.Document_Type_y, itemBase.Document_Type_y),
        Document_Date: textSimilarityModel(baseLineItem.Document_Date, itemBase.Document_Date),
        Barclays_Entity: textSimilarityModel(baseLineItem.Barclays_Entity, itemBase.Barclays_Entity),
        Counterparty_Entity: textSimilarityModel(baseLineItem.Counterparty_Entity, itemBase.Counterparty_Entity)
    }
})

return outputs;
