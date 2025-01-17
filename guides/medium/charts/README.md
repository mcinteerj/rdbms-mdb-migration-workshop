Return to the root of the medium guide [here](..).

# Section 4: Visualisation using MongoDB Charts
Visualise the data you loaded into your MongoDB Atlas cluster in [step 2](../data-migration) using MongoDB Charts.

## Instructions
MongoDB Charts is included as part of the MongoDB Cloud platform and can be accessed through the Atlas platform. The following steps will help you get started:

* Click on the ‘Charts’ tab on your Atlas Cluster Screen
> <img src="./images/charts-1.png" height="300">

* Create a new Dashboard in the Charts Tab by clicking on the ‘Add Dashboard’ button. 
> <img src="./images/charts-2.png" height="300">

* In the popup, enter the ‘Title’ of your Dashboard, and a ‘Description’. Once you’re done, click on the ‘Create’ button.
> <img src="./images/charts-3.png" height="300">

* Once the Dashboard creation is complete, your dashboard would be automatically opened, If not, click on your created dashboard under the ‘Dashboards’ heading:
> <img src="./images/charts-4.png" height="300">

* Once inside the dashboard, you will see a series of pop-ups as a part of the instructions wizard. For each pop-up, click on ‘OK’ or ‘Next’ to proceed. As an example, the first such pop-up is shown below.
> <img src="./images/charts-11.png" height="300">

* Next, click on the ‘Add Chart’ button 
> <img src="./images/charts-5.png" height="300">

* In the create chart screen, start by selecting your Collection as the ‘Data Source’
> <img src="./images/charts-6.png" height="300">

* Select the type of the chart you wish to create from the ‘Chart Type’ drop-down menu
> <img src="./images/charts-7.png" height="300">

* You can put in your aggregation query into the ‘Query’ bar to pre-aggregate data to be visualised 
> <img src="./images/charts-8.png" height="300">

* You can also drag and drop fields into the encoding panel and select the relevant details based on your Chart type
> <img src="./images/charts-9.png" height="100">

* In case you accidentally select a wrong field, you can click on the bin icon as shown below to delete it.
> <img src="./images/charts-10.png" height="300">

You are now ready to make the vizualisation of your aggregations.

## Visualising the first Aggregation Exercise: Average Call Duration by Gender

* Select the `Hackathon.customers` collection as your data source
* We suggest using the **Column** Chart for this exercise (but feel free to experiment with other visualisations if you prefer!)
* The relevant fields for this chart are `call_duration` and `gender`  
* As you did in your aggregation pipeline query, you would need to use the `$unwind` reduction and and `mean` accumulator. 
* You can go to the **Customize** tab to modify colours and add **Data Value Labels**
* Remember to enter a **Title** and a short **Description** to your Chart as well! 
* Once you are done, you can compare your solution to the sample solution provided [here](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/blob/main/guides/solutions/charts)

## Visualising the second Aggregation Exercise: Total Calls per Hour of the Day

* Select the `Hackathon.customers` collection as your data source
* We suggest using the **Column** Chart for this exercise (but feel free to experiment with other visualisations if you prefer!)
* As this is a more complex aggregation, it would be a good idea to filter your data before you dive into creating your charts. To do this, enter your aggregation query from Exercise 3 (b) and enter it into the query field as shown in Step 6 of the Instructions above
* You will see that Charts has filtered out the fields available as well. For this exercise, `id` and `count` are the relevant fields
* A useful operator to use would be `$sum`
* You can go to the **Customize** tab to modify colours and add **Data Value Labels**
* Remember to enter a **Title** and a short **Description** to your Chart as well! 

**Hint: Producing visualizations with Charts is really close to the Aggregation Framework.**

Once you are done, you can compare your solution to the sample solution provided [here](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/blob/main/guides/solutions/charts)

## Complete

Congratulations! You've finished all of the exercises. Click [here](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/) to return to the home of this repository.
