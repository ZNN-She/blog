---
title: Nestjs
---

# Q&A

## 1. 使用async和直接返回有什么区别？

使用async和直接返回的区别在于，使用async可以在函数中使用await来等待异步操作完成，而直接返回则没有这个能力。
async适合在需要等待异步操作完成后才能继续执行的场景，例如数据库查询、文件读写等。
不适用async的场景是如果直接返回一个值，这时候是同步操作，没有等待异步操作完成的能力，是获取不到中间过程中异步操作的结果的。
async函数返回的是一个Promise.reject也是能Nestjs处理的捕获到的。

## 接口(Xxx.interfaces.ts)和类(Xxx.entity.ts、Xxx.dto.ts)的区别？
结论
- 接口只做编译期类型约束时也能用类，在编译后被完全擦除；类在运行时仍然存在（有构造函数/原型）。
差异
- 接口：仅编译期类型检查，零运行时开销；无法参与 Nest 的运行时特性（ ValidationPipe 、 class-transformer 、设计时类型元数据）。
- 类：在运行时保留构造函数；Nest 能读取它的类型元数据。若启用 ValidationPipe({ transform: true }) ， @Body() 会把请求体转换为该类的实例；未启用时，参数仍是普通对象，只是 TypeScript 把它视为该类的类型。

选择建议
- 只约束形状，完全不需要运行时校验/转换：接口更轻量、直观。
- 可能需要扩展到运行时校验/转换、或希望有实例方法/ instanceof 检查：用类更合适。你当前项目已有实体类 src/cats/entities/cat.entity.ts:1 ，这类通常用于持久化层（如 ORM）；控制器/服务的输入输出仍建议用 DTO 类。

## 动态模块(Dynamic Module) TODO

## implements和extends的区别？
结论
- implements：类实现接口，必须实现接口中的所有方法。只是类型层面的契约检查，不带来任何运行时行为，也不影响依赖注入或装饰器。
- extends：类继承父类，子类可以继承父类的所有属性和方法，也可以重写父类的方法。
- 接口在编译后被擦除； implements 不会产生元数据。
- 需要运行时校验/转换时（如 DTO 验证），应使用“类”，因为类能携带运行时元数据；接口仅用于编译期类型约束。

## HTTP REST/GraphQL API TODO
- REST API：基于 HTTP 协议的 API，使用 HTTP 方法（GET、POST、PUT、DELETE 等）来操作资源。
- GraphQL (code first)：基于 HTTP 协议的 API，使用 GraphQL 查询语言来操作资源。
- GraphQL (schema first)：基于 HTTP 协议的 API，使用 GraphQL 模式语言来操作资源。
- Microservice (non-HTTP)：基于消息队列（如 RabbitMQ、Kafka）的 API，不使用 HTTP 协议。
- WebSocket：基于 WebSocket 协议的 API，支持双向通信。

## 过滤器(Filter) TODO
- 过滤器：用于捕获应用程序中的异常，例如数据库连接错误、404 错误等。
- 过滤器可以在全局范围内应用，也可以在控制器或路由处理程序级别应用。
- 过滤器可以使用 @Catch() 装饰器来定义，也可以实现 ExceptionFilter 接口。
- 过滤器可以在异常发生时执行自定义逻辑，例如记录日志、返回自定义错误响应等。

