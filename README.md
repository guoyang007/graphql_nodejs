### Graphql example

文章： https://mp.weixin.qq.com/s/OQFanVtx0CvQsIMamrW76A

#### 初体验

跟thrift有太多相似之处：

* 端点名： service名
* args: requestType
* type: reponseType
* 各种GraphQL类型： int string object list等

##### 收益：

* 调用方，可以指明需要的字段（当然前提是提供方针对该端点提供了足够的字段信息）

* 针对thrift文件 自动转换成graphql接口，收益会比较大： 自动将server端数据聚合到一个接口，调用方直接一个接口获取所有数据，不再需要自行调用多次，也省了多个controller, service的代码编写（省掉了很多模板代码）。

成本： 

* 需要服务提供方配合： 提供一个graphql的接口。工作量多少？