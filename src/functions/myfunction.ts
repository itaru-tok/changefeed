import { app, InvocationContext } from "@azure/functions";

export async function myfunction(documents: unknown[], context: InvocationContext): Promise<void> {
    context.log(`Cosmos DB function processed ${documents.length} documents`);
    documents.forEach(document => {
        context.log(`Document: ${JSON.stringify(document)}`);
    });
}

app.cosmosDB('myfunction', {
    connection: 'CosmosDBConnectionString',
    databaseName: 'tokuda_db',
    containerName: 'Users',
    createLeaseContainerIfNotExists: true,
    handler: myfunction
});
