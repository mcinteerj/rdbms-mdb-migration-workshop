Return to the easy guide [here](..).
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

* Once inside the dashboard, click on the ‘Add Chart’ button 
> <img src="./images/charts-5.png" height="300">

* In the create chart screen, start by selecting your Collection as the ‘Data Source’
> <img src="./images/charts-6.png" height="300">

* Select the type of the chart you wish to create from the ‘Chart Type’ drop-down menu
> <img src="./images/charts-7.png" height="300">

* You can put in your aggregation query into the ‘Query’ bar to generate results 
> <img src="./images/charts-8.png" height="300">

* You can also drag and drop fields into the encoding panel and select the relevant details based on your Chart type
> <img src="./images/charts-9.png" height="100">

## Visualising the first Aggregation Exercise: Average Call Duration by Gender

* Select the '''Hackathon.customers''’ collection as your data source
* We suggest using the ‘Bar Chart’ graph for this exercise (but feel free to experiment with other visualisations if you prefer!)
* The relevant fields for this chart are ''‘call_duration’'' and ''‘gender''’  
* As you did in your aggregation pipeline query, you would need to use the ''''$unwind''' and '''$mean''' operators 
* Remember to edit the ‘Data Value Label’ to customize! 
* Once you're done, you can see a [Sample Result](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/blob/main/guides/solutions/Aggregation1Charts.png) here. However, please note that there are many possible solutions to this exercise. 

## Visualising the second Aggregation Exercise: Peak Calling Time

* Select the '''Hackathon.customers''' collection as your data source
* We suggest using the ‘Bar Chart’ graph for this exercise (but feel free to experiment with other visualisations if you prefer!)
* As this is a more complex aggregation, it would be a good idea to filter your data before you dive into creating your charts. To do this, enter your aggregation query from Exercise 3 (b) and enter it into the query field as shown in Step 6 of the Instructions above
* You will see that Charts has filtered out the fields available as well. For this exercise, '''id''' and '''count''' are the relevant fields
* A useful operator to use would be '''$sum'''
* Remember to edit the ‘Data Value Label’ to customize! 
* Once you are done, you can see a [Sample Result](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/blob/main/guides/solutions/Aggregation2Chart.png) here.
However, please note that there are many possible solutions to this exercise.
