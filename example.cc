// #include <node.h>

// const int maxValue = 10;
// int numberOfCalls = 0;

// void WhoAmI(const v8::FunctionCallbackInfo<v8::Value>& args) {
//   v8::Isolate* isolate = args.GetIsolate();
//   auto message = v8::String::NewFromUtf8(isolate, "I'm a Node Hero!");
//   args.GetReturnValue().Set(message);
// }

// void Increment(const v8::FunctionCallbackInfo<v8::Value>& args) {
//   v8::Isolate* isolate = args.GetIsolate();

//   if (!args[0]->IsNumber()) {
//     isolate->ThrowException(v8::Exception::TypeError(
//           v8::String::NewFromUtf8(isolate, "Argument must be a number")));
//     return;
//   }

//   double argsValue = args[0]->NumberValue();
//   if (numberOfCalls + argsValue > maxValue) {
//     isolate->ThrowException(v8::Exception::Error(
//           v8::String::NewFromUtf8(isolate, "Counter went through the roof!")));
//     return;
//   }

//   numberOfCalls += argsValue;

//   auto currentNumberOfCalls =
//     v8::Number::New(isolate, static_cast<double>(numberOfCalls));

//   args.GetReturnValue().Set(currentNumberOfCalls);
// }

// void Initialize(v8::Local<v8::Object> exports) {
//   NODE_SET_METHOD(exports, "whoami", WhoAmI);
//   NODE_SET_METHOD(exports, "increment", Increment);
// }

// NODE_MODULE(module_name, Initialize)

// #include <nan.h>

// const int maxValue = 10;
// int numberOfCalls = 0;

// void WhoAmI(const Nan::FunctionCallbackInfo<v8::Value>& args) {
//   auto message = Nan::New<v8::String>("I'm a Node Hero!").ToLocalChecked();
//   args.GetReturnValue().Set(message);
// }

// void Increment(const Nan::FunctionCallbackInfo<v8::Value>& args) {
//   if (!args[0]->IsNumber()) {
//     Nan::ThrowError("Argument must be a number");
//     return;
//   }

//   double argsValue = args[0]->NumberValue();
//   if (numberOfCalls + argsValue > maxValue) {
//     Nan::ThrowError("Counter went through the roof!");
//     return;
//   }

//   numberOfCalls += argsValue;

//   auto currentNumberOfCalls =
//     Nan::New<v8::Number>(numberOfCalls);

//   args.GetReturnValue().Set(currentNumberOfCalls);
// }

// void Initialize(v8::Local<v8::Object> exports) {
//   exports->Set(Nan::New("whoami").ToLocalChecked(),
//       Nan::New<v8::FunctionTemplate>(WhoAmI)->GetFunction());
//   exports->Set(Nan::New("increment").ToLocalChecked(),
//       Nan::New<v8::FunctionTemplate>(Increment)->GetFunction());
// }

// NODE_MODULE(addon, Initialize)

#include <nan.h>

const int maxValue = 10;
int numberOfCalls = 0;

NAN_METHOD(WhoAmI) {
  auto message = Nan::New<v8::String>("I'm a Node Hero!").ToLocalChecked();
  info.GetReturnValue().Set(message);
}

NAN_METHOD(Increment) {
  if (!info[0]->IsNumber()) {
    Nan::ThrowError("Argument must be a number");
    return;
  }

  double infoValue = info[0]->NumberValue();
  if (numberOfCalls + infoValue > maxValue) {
    Nan::ThrowError("Counter went through the roof!");
    return;
  }

  numberOfCalls += infoValue;

  auto currentNumberOfCalls =
    Nan::New<v8::Number>(numberOfCalls);

  info.GetReturnValue().Set(currentNumberOfCalls);
}

NAN_MODULE_INIT(Initialize) {
  NAN_EXPORT(target, WhoAmI);
  NAN_EXPORT(target, Increment);
}

NODE_MODULE(addon, Initialize)