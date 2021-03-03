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

## First aggregation visualization

Now that you are setup with Charts, you can select the ```Hackathon.customers``` collection as you data and put the ```call_duration``` in the x and ```gender``` in the y.
As in the aggregation pipeline, you want to ```unwind``` the ```call_duration``` to have one document per calls and then the average ```mean```.
For the ```gender``` you want it as ```Value```.
Then you can go into ```Customize``` to enable the ```Data Value Label```.
You can see the result in the [Solution](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/blob/main/guides/solutions/Aggregation1Charts.png)
Values may vary depending on the session.

## Second aggregation visualization

For the second aggregation we will filter the data beforehand using the ```Query``` function.
Once you have put the aggregation pipeline in the ```Query``` field, you will see only the ```_id``` and ```count``` as ```Fields``` on the left.
You can drag each one in the ```x``` field and ```y``` field to get the visualization.
Charts will automatically check the ```Binning``` option but we want to see the ```count``` for each hour so we will uncheck this option and select ```Sum``` for the ```count``` field.
The result should look like this [Solution](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/blob/main/guides/solutions/Aggregation2Chart.png)
Values may vary depending on the session.
