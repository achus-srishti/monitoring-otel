"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[5715],{"./src/components/Forms/Form.story.tsx":function(M,P,o){o.r(P),o.d(P,{AsyncValidation:function(){return z},Basic:function(){return $},DefaultValues:function(){return G},default:function(){return ne}});var t=o("../../node_modules/react/index.js"),p=o("./src/components/Forms/Form.tsx"),x=o("./src/components/Forms/Legend.tsx"),f=o("./src/components/Forms/Field.tsx"),g=o("./src/components/Input/Input.tsx"),y=o("./src/components/TextArea/TextArea.tsx"),b=o("./src/components/Forms/Checkbox.tsx"),E=o("./src/components/Switch/Switch.tsx"),S=o("../../node_modules/react-hook-form/dist/index.esm.mjs");const T=S.xI;try{T.displayName="InputControl",T.__docgenInfo={description:"",displayName:"InputControl",props:{render:{defaultValue:null,description:"",name:"render",required:!0,type:{name:"({ field, fieldState, formState, }: { field: ControllerRenderProps<TFieldValues, TName>; fieldState: ControllerFieldState; formState: UseFormStateReturn<TFieldValues>; }) => ReactElement<...>"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},rules:{defaultValue:null,description:"",name:"rules",required:!1,type:{name:'Omit<RegisterOptions<TFieldValues, TName>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate">'}},shouldUnregister:{defaultValue:null,description:"",name:"shouldUnregister",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"any"}},control:{defaultValue:null,description:"",name:"control",required:!1,type:{name:"Control<TFieldValues>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/InputControl.tsx#InputControl"]={docgenInfo:T.__docgenInfo,name:"InputControl",path:"src/components/InputControl.tsx#InputControl"})}catch{}var _=o("./src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx"),v=o("./src/components/Select/Select.tsx"),d=o("./src/components/Button/Button.tsx"),i=o("./src/utils/storybook/withStoryContainer.tsx"),e=o("../../node_modules/react/jsx-runtime.js"),u=o("../../node_modules/@mdx-js/react/lib/index.js"),l=o("../../node_modules/@storybook/blocks/dist/index.mjs");function r(V){const n=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",code:"code",h2:"h2",pre:"pre",h3:"h3",h4:"h4",ul:"ul",li:"li"},(0,u.RP)(),V.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.W8,{title:"MDX|Form",component:p.l}),`
`,(0,e.jsx)(n.h1,{id:"form",children:"Form"}),`
`,(0,e.jsxs)(n.p,{children:["Form component provides a way to build simple forms at Grafana. It is built on top of ",(0,e.jsx)(n.a,{href:"https://react-hook-form.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-hook-form"})," library and incorporates the same concepts while adjusting the API slightly."]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsxs)(n.strong,{children:["Note: This component is deprecated and will be removed in the future versions of grafana/ui. Use the ",(0,e.jsx)(n.code,{children:"useForm"})," hook from react-hook-form instead."]})}),`
`,(0,e.jsx)(n.h2,{id:"usage",children:"Usage"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:`import { Forms } from '@grafana/ui';

interface UserDTO {
  name: string;
  email: string;
  //...
}

const defaultUser: Partial<UserDTO> = {
  name: 'Roger Waters',
  // ...
}

<Form
  defaultValues={defaultUser}
  onSubmit={async (user: UserDTO) => await createUser(user)}
>{({register, errors}) => {
  return (
    <Field>
      <Input {...register("name")}/>
      <Input {...register("email", {required: true})} type="email" />
      <Button type="submit">Create User</Button>
    </Field>
  )
}}</Form>
`})}),`
`,(0,e.jsx)(n.h3,{id:"form-api",children:"Form API"}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"Form"})," component exposes API via render prop. Three properties are exposed: ",(0,e.jsx)(n.code,{children:"register"}),", ",(0,e.jsx)(n.code,{children:"errors"})," and ",(0,e.jsx)(n.code,{children:"control"})]}),`
`,(0,e.jsx)(n.h4,{id:"register",children:(0,e.jsx)(n.code,{children:"register"})}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"register"})," allows registering form elements (inputs, selects, radios, etc) in the form. In order to do that you need to invoke the function itself and spread the props into the input. For example:"]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Input {...register('inputName')} />
`})}),`
`,(0,e.jsxs)(n.p,{children:["The first argument for ",(0,e.jsx)(n.code,{children:"register"})," is the field name. It also accepts an object, which describes validation rules for a given input:"]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Input
  {...register("inputName", {
    required: true,
    minLength: 10,
    validate: v => { // custom validation rule }
  })}
/>
`})}),`
`,(0,e.jsxs)(n.p,{children:["See ",(0,e.jsx)(n.a,{href:"#validation",children:"Validation"})," for examples on validation and validation rules."]}),`
`,(0,e.jsx)(n.h4,{id:"errors",children:(0,e.jsx)(n.code,{children:"errors"})}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"errors"})," is an object that contains validation errors of the form. To show error message and invalid input indication in your form, wrap input element with ",(0,e.jsx)(n.code,{children:"<Field ...>"})," component and pass ",(0,e.jsx)(n.code,{children:"invalid"})," and ",(0,e.jsx)(n.code,{children:"error"})," props to it:"]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Field label="Name" invalid={!!errors.name} error="Name is required">
  <Input {...register('name', { required: true })} />
</Field>
`})}),`
`,(0,e.jsx)(n.h4,{id:"control",children:(0,e.jsx)(n.code,{children:"control"})}),`
`,(0,e.jsxs)(n.p,{children:["By default ",(0,e.jsx)(n.code,{children:"Form"}),` component assumes form elements are uncontrolled (https://reactjs.org/docs/glossary.html#controlled-vs-uncontrolled-components).
There are some components like `,(0,e.jsx)(n.code,{children:"RadioButton"})," or ",(0,e.jsx)(n.code,{children:"Select"}),` that are controlled-only and require some extra work. To make
them work with the form, you need to render those using `,(0,e.jsx)(n.code,{children:"InputControl"})," component:"]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`import { Form, Field, InputControl } from '@grafana/ui';

// render function
<Form ...>{({register, errors, control}) => (
  <>
    <Field label="RadioButtonExample">
      <InputControl
        {/* Render InputControl as controlled input (RadioButtonGroup) */}
        render={({field}) => <RadioButtonGroup {...field} options={...} />}
        {/* Pass control exposed from Form render prop */}
        control={control}
        name="radio"
      />
    </Field>

    <Field label="SelectExample">
      <InputControl
        {/* Render InputControl as controlled input (Select) */}
        render={({field}) => <Select {...field} options={...} />}
        {/* Pass control exposed from Form render prop */}
        control={control}
        name="select"
      />
    </Field>
  </>
)}
</Form>
`})}),`
`,(0,e.jsxs)(n.p,{children:["In case we want to modify the selected value before passing it to the form, we can use the ",(0,e.jsx)(n.code,{children:"onChange"})," callback from the render's ",(0,e.jsx)(n.code,{children:"field"})," argument:"]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Field label="SelectExample">
  <InputControl
    {/* Here \`value\` has a nested \`value\` property, which we want to save onto the form. */}
    render={(field: {onChange, ...field}) => <Select {...field} onChange={(value) => onChange(value.value)}/>}
    control={control}
    name="select"
  />
</Field>
`})}),`
`,(0,e.jsxs)(n.p,{children:["Note that ",(0,e.jsx)(n.code,{children:"field"})," also contains ",(0,e.jsx)(n.code,{children:"ref"})," prop, which is passed down to the rendered component by default. In case if that component doesn't support this prop, it will need to be removed before spreading the ",(0,e.jsx)(n.code,{children:"field"}),"."]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Field label="SelectExample">
  <InputControl
     {/*Remove \`ref\` prop, so it doesn't get passed down to the component that doesn't support it. */}
    render={(field: {onChange, ref, ...field}) => <Select {...field} onChange={(value) => onChange(value.value)}/>}
    control={control}
    name="select"
  />
</Field>
`})}),`
`,(0,e.jsx)(n.h3,{id:"default-values",children:"Default values"}),`
`,(0,e.jsxs)(n.p,{children:["Default values of the form can be passed either via ",(0,e.jsx)(n.code,{children:"defaultValues"})," property on the ",(0,e.jsx)(n.code,{children:"Form"}),` element, or directly on
form's input via `,(0,e.jsx)(n.code,{children:"defaultValue"}),` prop.
Note that changing/updating `,(0,e.jsx)(n.code,{children:"defaultValues"}),` passed to the form will reset the form's state, which might be undesirable in
case it has both controlled and uncontrolled components. In that case it's better to pass `,(0,e.jsx)(n.code,{children:"defaultValue"})," to each form component separately."]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`// Passing default values to the Form

interface FormDTO {
  name: string;
  isAdmin: boolean;
}

const defaultValues: FormDto {
  name: 'Roger Waters',
  isAdmin: false,
}

<Form defaultValues={defaultValues} ...>{...}</Form>
`})}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`// Passing default value directly to form inputs

interface FormDTO {
  name: string;
  isAdmin: boolean;
}

const defaultValues: FormDto {
  name: 'Roger Waters',
  isAdmin: false,
}

<Form ...>{
  ({register}) => (
    <>
      <Input {...register("name")} defaultValue={default.name} />
    </>
  )}
</Form>
`})}),`
`,(0,e.jsx)(n.h3,{id:"validation",children:"Validation"}),`
`,(0,e.jsxs)(n.p,{children:["Validation can be performed either synchronously or asynchronously. What's important here is that the validation function must return either a ",(0,e.jsx)(n.code,{children:"boolean"})," or a ",(0,e.jsx)(n.code,{children:"string"}),"."]}),`
`,(0,e.jsx)(n.h4,{id:"basic-required-example",children:"Basic required example"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Form ...>{
  ({register, errors}) => (
    <>
      <Field invalid={!!errors.name} error={errors.name && 'Name is required'}
      <Input
        {...register("name", { required: true })}
        defaultValue={default.name}
      />
    </>
  )}
</Form>
`})}),`
`,(0,e.jsx)(n.h4,{id:"required-with-synchronous-custom-validation",children:"Required with synchronous custom validation"}),`
`,(0,e.jsxs)(n.p,{children:["One important thing to note is that if you want to provide different error messages for different kind of validation errors you'll need to return a ",(0,e.jsx)(n.code,{children:"string"})," instead of a ",(0,e.jsx)(n.code,{children:"boolean"}),"."]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Form ...>{
  ({register, errors}) => (
    <>
      <Field invalid={!!errors.name} error={errors.name?.message }
      <Input
        defaultValue={default.name}
        {...register("name", {
          required: 'Name is required',
          validation: v => {
            return v !== 'John' && 'Name must be John'
          },
        )}
      />
    </>
  )}
</Form>
`})}),`
`,(0,e.jsx)(n.h4,{id:"asynchronous-validation",children:"Asynchronous validation"}),`
`,(0,e.jsx)(n.p,{children:"For cases when you might want to validate fields asynchronously (on the backend or via some service) you can provide an asynchronous function to the field."}),`
`,(0,e.jsxs)(n.p,{children:["Consider this function that simulates a call to some service. Remember, if you want to display an error message replace ",(0,e.jsx)(n.code,{children:"return true"})," or ",(0,e.jsx)(n.code,{children:"return false"})," with ",(0,e.jsx)(n.code,{children:"return 'your error message'"}),"."]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`validateAsync = (newValue: string) => {
  try {
    (await new Promise()) <
      ValidateResult >
      ((resolve, reject) => {
        setTimeout(() => {
          reject('Something went wrong...');
        }, 2000);
      });
    return true;
  } catch (e) {
    return false;
  }
};
`})}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Form ...>{
  ({register, errors}) => (
    <>
      <Field invalid={!!errors.name} error={errors.name?.message}
      <Input
        defaultValue={default.name}
        {...register("name", {
          required: 'Name is required',
          validation: async v => {
            return  await validateAsync(v);
          },
        )}
      />
    </>
  )}
</Form>
`})}),`
`,(0,e.jsx)(n.h3,{id:"upgrading-to-v8",children:"Upgrading to v8"}),`
`,(0,e.jsxs)(n.p,{children:["Version 8 of Grafana-UI is using version 7 of ",(0,e.jsx)(n.code,{children:"react-hook-form"})," (previously version 5 was used), which introduced a few breaking changes to the ",(0,e.jsx)(n.code,{children:"Form"})," API. The detailed list of changes can be found in the library's migration guides:"]}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"https://react-hook-form.com/migrate-v5-to-v6/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Migration guide v5 to v6"})}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"https://react-hook-form.com/migrate-v6-to-v7/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Migration guide v6 to v7"})}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"In a nutshell, the two most important changes are:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["register method is no longer passed as a ",(0,e.jsx)(n.code,{children:"ref"}),", but instead its result is spread onto the input component:"]}),`
`]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`-(<input ref={register({ required: true })} name="test" />) + <input {...register('test', { required: true })} />;
`})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"InputControl"}),"'s ",(0,e.jsx)(n.code,{children:"as"})," prop has been replaced with ",(0,e.jsx)(n.code,{children:"render"}),", which has ",(0,e.jsx)(n.code,{children:"field"})," and ",(0,e.jsx)(n.code,{children:"fieldState"})," objects as arguments. ",(0,e.jsx)(n.code,{children:"onChange"}),", ",(0,e.jsx)(n.code,{children:"onBlur"}),", ",(0,e.jsx)(n.code,{children:"value"}),", ",(0,e.jsx)(n.code,{children:"name"}),", and ",(0,e.jsx)(n.code,{children:"ref"})," are parts of ",(0,e.jsx)(n.code,{children:"field"}),"."]}),`
`]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`- <Controller as={<input />} />
+ <Controller render={({ field }) => <input {...field} />}
// or
+ <Controller render={({ field, fieldState }) => <input {...field} />} />
`})}),`
`,(0,e.jsx)(n.h3,{id:"props",children:"Props"}),`
`,(0,e.jsx)(l.ov,{of:p.l})]})}function s(V={}){const{wrapper:n}=Object.assign({},(0,u.RP)(),V.components);return n?(0,e.jsx)(n,Object.assign({},V,{children:(0,e.jsx)(r,V)})):r(V)}var c=s,a=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,F=(V,n,w)=>n in V?a(V,n,{enumerable:!0,configurable:!0,writable:!0,value:w}):V[n]=w,O=(V,n)=>{for(var w in n||(n={}))A.call(n,w)&&F(V,w,n[w]);if(C)for(var w of C(n))B.call(n,w)&&F(V,w,n[w]);return V},R=(V,n)=>h(V,m(n)),D=(V,n,w)=>new Promise((W,k)=>{var te=q=>{try{X(w.next(q))}catch(J){k(J)}},ae=q=>{try{X(w.throw(q))}catch(J){k(J)}},X=q=>q.done?W(q.value):Promise.resolve(q.value).then(te,ae);X((w=w.apply(V,n)).next())}),L,I,N,j,H,K,U,Y,Q,ne={title:"Forms/Form",decorators:[i.d],parameters:{docs:{page:c}}};const Z=[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],ee=V=>t.createElement(p.l,{defaultValues:V,onSubmit:n=>{console.log(n)}},({register:n,control:w,errors:W})=>(console.log(W),t.createElement(t.Fragment,null,t.createElement(x.s,null,"Edit user"),t.createElement(f.D,{label:"Name",invalid:!!W.name,error:"Name is required"},t.createElement(g.p,R(O({},n("name",{required:!0})),{placeholder:"Roger Waters"}))),t.createElement(f.D,{label:"Email",invalid:!!W.email,error:"E-mail is required"},t.createElement(g.p,R(O({},n("email",{required:!0})),{id:"email",placeholder:"roger.waters@grafana.com"}))),t.createElement(f.D,{label:"Username"},t.createElement(g.p,R(O({},n("username")),{placeholder:"mr.waters"}))),t.createElement(f.D,{label:"Nested object"},t.createElement(g.p,R(O({},n("nested.path")),{placeholder:"Nested path"}))),t.createElement(f.D,{label:"Textarea",invalid:!!W.text,error:"Text is required"},t.createElement(y.f,R(O({},n("text",{required:!0})),{placeholder:"Long text"}))),t.createElement(f.D,{label:"Checkbox",invalid:!!W.checkbox,error:"We need your consent"},t.createElement(b.S,R(O({},n("checkbox",{required:!0})),{label:"Do you consent?"}))),t.createElement(f.D,{label:"Switch"},t.createElement(E.d,O({name:"switch"},n))),t.createElement(f.D,{label:"RadioButton"},t.createElement(T,{name:"radio",control:w,render:({field:k})=>t.createElement(_.z,R(O({},k),{options:Z}))})),t.createElement(f.D,{label:"Select",invalid:!!W.select,error:"Select is required"},t.createElement(T,{name:"select",control:w,rules:{required:!0},render:({field:k})=>t.createElement(v.l6,R(O({},k),{options:Z}))})),t.createElement(d.$n,{type:"submit"},"Update")))),$=()=>t.createElement(t.Fragment,null,ee()),G=()=>{const V=[{name:"Roger Waters",nested:{path:"Nested path default value"},radio:"option2",select:"option1",switch:!0}];return t.createElement(t.Fragment,null,ee(V[0]))},z=({passAsyncValidation:V})=>t.createElement(t.Fragment,null,t.createElement(p.l,{onSubmit:n=>{alert("Submitted successfully!")}},({register:n,control:w,errors:W,formState:k})=>(console.log(W),t.createElement(t.Fragment,null,t.createElement(x.s,null,"Edit user"),t.createElement(f.D,{label:"Name",invalid:!!W.name,error:"Username is already taken"},t.createElement(g.p,O({placeholder:"Roger Waters"},n("name",{validate:re(V)})))),t.createElement(d.$n,{type:"submit",disabled:k.isSubmitting},"Submit")))));z.args={passAsyncValidation:!0};const re=V=>()=>D(void 0,null,function*(){try{return yield new Promise((n,w)=>{setTimeout(()=>{V?n():w("Something went wrong...")},2e3)}),!0}catch(n){return console.log(n),!1}});$.parameters=R(O({},$.parameters),{docs:R(O({},(L=$.parameters)==null?void 0:L.docs),{source:O({originalSource:`() => {
  return <>{renderForm()}</>;
}`},(N=(I=$.parameters)==null?void 0:I.docs)==null?void 0:N.source)})}),G.parameters=R(O({},G.parameters),{docs:R(O({},(j=G.parameters)==null?void 0:j.docs),{source:O({originalSource:`() => {
  const defaultValues = [{
    name: 'Roger Waters',
    nested: {
      path: 'Nested path default value'
    },
    radio: 'option2',
    select: 'option1',
    switch: true
  }];
  return <>{renderForm(defaultValues[0])}</>;
}`},(K=(H=G.parameters)==null?void 0:H.docs)==null?void 0:K.source)})}),z.parameters=R(O({},z.parameters),{docs:R(O({},(U=z.parameters)==null?void 0:U.docs),{source:O({originalSource:`({
  passAsyncValidation
}) => {
  return <>
      <Form onSubmit={(data: FormDTO) => {
      alert('Submitted successfully!');
    }}>
        {({
        register,
        control,
        errors,
        formState
      }) => {
        console.log(errors);
        return <>
              <Legend>Edit user</Legend>

              <Field label="Name" invalid={!!errors.name} error="Username is already taken">
                <Input placeholder="Roger Waters" {...register('name', {
              validate: validateAsync(passAsyncValidation)
            })} />
              </Field>

              <Button type="submit" disabled={formState.isSubmitting}>
                Submit
              </Button>
            </>;
      }}
      </Form>
    </>;
}`},(Q=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:Q.source)})})},"./src/components/Forms/Checkbox.tsx":function(M,P,o){o.d(P,{S:function(){return u}});var t=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),p=o("../../node_modules/react/index.js"),x=o("./src/themes/ThemeContext.tsx"),f=o("./src/themes/mixins.ts"),g=o("./src/components/Forms/Label.tsx"),y=Object.defineProperty,b=Object.defineProperties,E=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,v=(r,s,c)=>s in r?y(r,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[s]=c,d=(r,s)=>{for(var c in s||(s={}))T.call(s,c)&&v(r,c,s[c]);if(S)for(var c of S(s))_.call(s,c)&&v(r,c,s[c]);return r},i=(r,s)=>b(r,E(s)),e=(r,s)=>{var c={};for(var a in r)T.call(r,a)&&s.indexOf(a)<0&&(c[a]=r[a]);if(r!=null&&S)for(var a of S(r))s.indexOf(a)<0&&_.call(r,a)&&(c[a]=r[a]);return c};const u=p.forwardRef((r,s)=>{var c=r,{label:a,description:h,value:m,htmlValue:C,onChange:A,disabled:B,className:F,indeterminate:O,invalid:R}=c,D=e(c,["label","description","value","htmlValue","onChange","disabled","className","indeterminate","invalid"]);const L=(0,p.useCallback)(j=>{A&&A(j)},[A]),I=(0,x.of)(l,R),N=O?"mixed":void 0;return p.createElement("label",{className:(0,t.cx)(I.wrapper,F)},p.createElement("div",{className:I.checkboxWrapper},p.createElement("input",i(d({type:"checkbox",className:(0,t.cx)(I.input,O&&I.inputIndeterminate),checked:m,disabled:B,onChange:L,value:C,"aria-checked":N},D),{ref:s})),p.createElement("span",{className:I.checkmark})),a&&p.createElement("span",{className:I.label},a),h&&p.createElement("span",{className:I.description},h))}),l=(r,s=!1)=>{const c=(0,g.f)(r),a=2,h=1,m=C=>s?r.colors.error.border:C;return{wrapper:(0,t.AH)({display:"inline-grid",alignItems:"center",columnGap:r.spacing(h),gridAutoRows:"max-content",position:"relative",verticalAlign:"middle"}),input:(0,t.AH)({position:"absolute",zIndex:1,top:0,left:0,width:"100% !important",height:"100%",opacity:0,"&:focus + span, &:focus-visible + span":(0,f.Hi)(r),"&:focus:not(:focus-visible) + span":(0,f.cr)(r),"&:checked + span":{background:r.colors.primary.main,border:`1px solid ${m(r.colors.primary.main)}`,"&:hover":{background:r.colors.primary.shade},"&:after":{content:'""',position:"absolute",zIndex:2,left:"4px",top:0,width:"6px",height:"12px",border:`solid ${r.colors.primary.contrastText}`,borderWidth:"0 3px 3px 0",transform:"rotate(45deg)"}},"&:disabled + span":{backgroundColor:r.colors.action.disabledBackground,cursor:"not-allowed",border:`1px solid ${m(r.colors.action.disabledBackground)}`,"&:hover":{backgroundColor:r.colors.action.disabledBackground},"&:after":{borderColor:r.colors.action.disabledText}}}),inputIndeterminate:(0,t.AH)({"&[aria-checked='mixed'] + span":{border:`1px solid ${m(r.colors.primary.main)}`,background:r.colors.primary.main,"&:hover":{background:r.colors.primary.shade},"&:after":{content:'""',position:"absolute",zIndex:2,left:"2px",right:"2px",top:"calc(50% - 1.5px)",height:"3px",border:`1.5px solid ${r.colors.primary.contrastText}`,backgroundColor:r.colors.primary.contrastText,width:"auto",transform:"none"}},"&:disabled[aria-checked='mixed'] + span":{backgroundColor:r.colors.action.disabledBackground,border:`1px solid ${m(r.colors.error.transparent)}`,"&:after":{borderColor:r.colors.action.disabledText}}}),checkboxWrapper:(0,t.AH)({display:"flex",alignItems:"center",gridColumnStart:1,gridRowStart:1}),checkmark:(0,t.AH)({position:"relative",zIndex:2,display:"inline-block",width:r.spacing(a),height:r.spacing(a),borderRadius:r.shape.radius.default,background:r.components.input.background,border:`1px solid ${m(r.components.input.borderColor)}`,"&:hover":{cursor:"pointer",borderColor:m(r.components.input.borderHover)}}),label:(0,t.cx)(c.label,(0,t.AH)({gridColumnStart:2,gridRowStart:1,position:"relative",zIndex:2,cursor:"pointer",maxWidth:"fit-content",lineHeight:r.typography.bodySmall.lineHeight,marginBottom:0})),description:(0,t.cx)(c.description,(0,t.AH)({gridColumnStart:2,gridRowStart:2,lineHeight:r.typography.bodySmall.lineHeight,marginTop:0}))}};u.displayName="Checkbox";try{u.displayName="Checkbox",u.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"Label to display next to checkbox",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Current value of the checkbox",name:"value",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Description to display under the label",name:"description",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},htmlValue:{defaultValue:null,description:'htmlValue allows to specify the input "value" attribute',name:"htmlValue",required:!1,type:{name:"string | number"}},indeterminate:{defaultValue:null,description:'Sets the checkbox into a "mixed" state. This is only a visual change and does not affect the value.',name:"indeterminate",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/Checkbox.tsx#Checkbox"]={docgenInfo:u.__docgenInfo,name:"Checkbox",path:"src/components/Forms/Checkbox.tsx#Checkbox"})}catch{}},"./src/components/Forms/Field.tsx":function(M,P,o){o.d(P,{D:function(){return i}});var t=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),p=o("../../node_modules/react/index.js"),x=o("./src/themes/ThemeContext.tsx"),f=o("./src/utils/reactUtils.ts"),g=o("./src/components/Forms/FieldValidationMessage.tsx"),y=o("./src/components/Forms/Label.tsx"),b=Object.defineProperty,E=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,_=(l,r,s)=>r in l?b(l,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[r]=s,v=(l,r)=>{for(var s in r||(r={}))S.call(r,s)&&_(l,s,r[s]);if(E)for(var s of E(r))T.call(r,s)&&_(l,s,r[s]);return l},d=(l,r)=>{var s={};for(var c in l)S.call(l,c)&&r.indexOf(c)<0&&(s[c]=l[c]);if(l!=null&&E)for(var c of E(l))r.indexOf(c)<0&&T.call(l,c)&&(s[c]=l[c]);return s};const i=p.forwardRef((l,r)=>{var s=l,{label:c,description:a,horizontal:h,invalid:m,loading:C,disabled:A,required:B,error:F,children:O,className:R,validationMessageHorizontalOverflow:D,htmlFor:L}=s,I=d(s,["label","description","horizontal","invalid","loading","disabled","required","error","children","className","validationMessageHorizontalOverflow","htmlFor"]);const N=(0,x.of)(u),j=L??(0,f.e)(O),H=typeof c=="string"?p.createElement(y.J,{htmlFor:j,description:a},`${c}${B?" *":""}`):c,K=e({invalid:m,disabled:A,loading:C});return p.createElement("div",v({className:(0,t.cx)(N.field,h&&N.fieldHorizontal,R)},I),H,p.createElement("div",null,p.createElement("div",{ref:r},p.cloneElement(O,K)),m&&F&&!h&&p.createElement("div",{className:(0,t.cx)(N.fieldValidationWrapper,{[N.validationMessageHorizontalOverflow]:!!D})},p.createElement(g.P,null,F))),m&&F&&h&&p.createElement("div",{className:(0,t.cx)(N.fieldValidationWrapper,N.fieldValidationWrapperHorizontal,{[N.validationMessageHorizontalOverflow]:!!D})},p.createElement(g.P,null,F)))});i.displayName="Field";function e(l){for(const r in l)l[r]===void 0&&delete l[r];return l}const u=l=>({field:(0,t.AH)({display:"flex",flexDirection:"column",marginBottom:l.spacing(2)}),fieldHorizontal:(0,t.AH)({flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}),fieldValidationWrapper:(0,t.AH)({marginTop:l.spacing(.5)}),fieldValidationWrapperHorizontal:(0,t.AH)({flex:"1 1 100%"}),validationMessageHorizontalOverflow:(0,t.AH)({width:0,overflowX:"visible","& > *":{whiteSpace:"nowrap"}})});try{i.displayName="Field",i.__docgenInfo={description:"",displayName:"Field",props:{children:{defaultValue:null,description:"Form input element, i.e Input or Switch",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},label:{defaultValue:null,description:"Label for the field",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description of the field",name:"description",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Indicates if field is in invalid state",name:"invalid",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Indicates if field is in loading state",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Indicates if field is disabled",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Indicates if field is required",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Error message to display",name:"error",required:!1,type:{name:"ReactNode"}},horizontal:{defaultValue:null,description:"Indicates horizontal layout of the field",name:"horizontal",required:!1,type:{name:"boolean"}},validationMessageHorizontalOverflow:{defaultValue:null,description:"make validation message overflow horizontally. Prevents pushing out adjacent inline components",name:"validationMessageHorizontalOverflow",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},htmlFor:{defaultValue:null,description:"A unique id that associates the label of the Field component with the control with the unique id.\nIf the `htmlFor` property is missing the `htmlFor` will be inferred from the `id` or `inputId` property of the first child.\nhttps://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for",name:"htmlFor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/Field.tsx#Field"]={docgenInfo:i.__docgenInfo,name:"Field",path:"src/components/Forms/Field.tsx#Field"})}catch{}},"./src/components/Forms/FieldValidationMessage.tsx":function(M,P,o){o.d(P,{P:function(){return g}});var t=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),p=o("../../node_modules/react/index.js"),x=o("./src/themes/ThemeContext.tsx"),f=o("./src/components/Icon/Icon.tsx");const g=({children:b,horizontal:E,className:S})=>{const T=(0,x.of)(y),_=(0,t.cx)(E?T.horizontal:T.vertical,S);return p.createElement("div",{role:"alert",className:_},p.createElement(f.I,{className:T.fieldValidationMessageIcon,name:"exclamation-triangle"}),b)},y=b=>{const E=`
      font-size: ${b.typography.size.sm};
      font-weight: ${b.typography.fontWeightMedium};
      padding: ${b.spacing(.5,1)};
      color: ${b.colors.error.contrastText};
      background: ${b.colors.error.main};
      border-radius: ${b.shape.radius.default};
      position: relative;
      display: inline-block;
      align-self: flex-start;

      a {
        color: ${b.colors.error.contrastText};
        text-decoration: underline;
      }

      a:hover {
        text-decoration: none;
      }
    `;return{vertical:(0,t.AH)(E,{margin:b.spacing(.5,0,0,0),"&:before":{content:'""',position:"absolute",left:"9px",top:"-5px",width:0,height:0,borderWidth:"0 4px 5px 4px",borderColor:`transparent transparent ${b.colors.error.main} transparent`,borderStyle:"solid"}}),horizontal:(0,t.AH)(E,{marginLeft:"10px","&:before":{content:'""',position:"absolute",left:"-5px",top:"9px",width:0,height:0,borderWidth:"4px 5px 4px 0",borderColor:"transparent #e02f44 transparent transparent",borderStyle:"solid"}}),fieldValidationMessageIcon:(0,t.AH)({marginRight:b.spacing()})}};try{g.displayName="FieldValidationMessage",g.__docgenInfo={description:"",displayName:"FieldValidationMessage",props:{className:{defaultValue:null,description:"Override component style",name:"className",required:!1,type:{name:"string"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/FieldValidationMessage.tsx#FieldValidationMessage"]={docgenInfo:g.__docgenInfo,name:"FieldValidationMessage",path:"src/components/Forms/FieldValidationMessage.tsx#FieldValidationMessage"})}catch{}try{y.displayName="getFieldValidationMessageStyles",y.__docgenInfo={description:"",displayName:"getFieldValidationMessageStyles",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isDark:{defaultValue:null,description:"",name:"isDark",required:!0,type:{name:"boolean"}},isLight:{defaultValue:null,description:"",name:"isLight",required:!0,type:{name:"boolean"}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ThemeColors"}},breakpoints:{defaultValue:null,description:"",name:"breakpoints",required:!0,type:{name:"ThemeBreakpoints"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!0,type:{name:"ThemeSpacing"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"ThemeShape"}},components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"ThemeComponents"}},typography:{defaultValue:null,description:"",name:"typography",required:!0,type:{name:"ThemeTypography"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!0,type:{name:"{ activePanel: number; navbarFixed: number; sidemenu: number; dropdown: number; typeahead: number; tooltip: number; modalBackdrop: number; modal: number; portal: number; }"}},shadows:{defaultValue:null,description:"",name:"shadows",required:!0,type:{name:"ThemeShadows"}},visualization:{defaultValue:null,description:"",name:"visualization",required:!0,type:{name:"ThemeVisualizationColors"}},transitions:{defaultValue:null,description:"",name:"transitions",required:!0,type:{name:"ThemeTransitions"}},v1:{defaultValue:null,description:"@deprecated Will be removed in a future version",name:"v1",required:!0,type:{name:"GrafanaTheme"}},flags:{defaultValue:null,description:"feature flags that might impact component looks",name:"flags",required:!0,type:{name:"{}"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/FieldValidationMessage.tsx#getFieldValidationMessageStyles"]={docgenInfo:y.__docgenInfo,name:"getFieldValidationMessageStyles",path:"src/components/Forms/FieldValidationMessage.tsx#getFieldValidationMessageStyles"})}catch{}},"./src/components/Forms/Form.tsx":function(M,P,o){o.d(P,{l:function(){return _}});var t=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),p=o("../../node_modules/react/index.js"),x=o("../../node_modules/react-hook-form/dist/index.esm.mjs"),f=Object.defineProperty,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,E=(v,d,i)=>d in v?f(v,d,{enumerable:!0,configurable:!0,writable:!0,value:i}):v[d]=i,S=(v,d)=>{for(var i in d||(d={}))y.call(d,i)&&E(v,i,d[i]);if(g)for(var i of g(d))b.call(d,i)&&E(v,i,d[i]);return v},T=(v,d)=>{var i={};for(var e in v)y.call(v,e)&&d.indexOf(e)<0&&(i[e]=v[e]);if(v!=null&&g)for(var e of g(v))d.indexOf(e)<0&&b.call(v,e)&&(i[e]=v[e]);return i};function _(v){var d=v,{defaultValues:i,onSubmit:e,validateOnMount:u=!1,validateFieldsOnMount:l,children:r,validateOn:s="onSubmit",maxWidth:c=600}=d,a=T(d,["defaultValues","onSubmit","validateOnMount","validateFieldsOnMount","children","validateOn","maxWidth"]);const h=(0,x.mN)({mode:s,defaultValues:i}),{handleSubmit:m,trigger:C,formState:A}=h,B=T(h,["handleSubmit","trigger","formState"]);return(0,p.useEffect)(()=>{u&&C(l)},[C,l,u]),p.createElement("form",S({className:(0,t.AH)({maxWidth:c!=="none"?c+"px":c,width:"100%"}),onSubmit:m(e)},a),r(S({errors:A.errors,formState:A,trigger:C},B)))}try{_.displayName="Form",_.__docgenInfo={description:"",displayName:"Form",props:{validateOn:{defaultValue:{value:"onSubmit"},description:"",name:"validateOn",required:!1,type:{name:"enum",value:[{value:'"onChange"'},{value:'"onBlur"'},{value:'"onSubmit"'},{value:'"all"'},{value:'"onTouched"'}]}},validateOnMount:{defaultValue:{value:"false"},description:"",name:"validateOnMount",required:!1,type:{name:"boolean"}},validateFieldsOnMount:{defaultValue:null,description:"",name:"validateFieldsOnMount",required:!1,type:{name:"string | string[]"}},defaultValues:{defaultValue:null,description:"",name:"defaultValues",required:!1,type:{name:"{ [x: string]: any; }"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"SubmitHandler<T>"}},maxWidth:{defaultValue:{value:"600"},description:"Sets max-width for container. Use it instead of setting individual widths on inputs.",name:"maxWidth",required:!1,type:{name:'number | "none"'}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/Form.tsx#Form"]={docgenInfo:_.__docgenInfo,name:"Form",path:"src/components/Forms/Form.tsx#Form"})}catch{}},"./src/components/Forms/Label.tsx":function(M,P,o){o.d(P,{J:function(){return v},f:function(){return d}});var t=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),p=o("../../node_modules/react/index.js"),x=o("./src/themes/ThemeContext.tsx"),f=o("./src/components/Icon/Icon.tsx"),g=Object.defineProperty,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,S=(i,e,u)=>e in i?g(i,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[e]=u,T=(i,e)=>{for(var u in e||(e={}))b.call(e,u)&&S(i,u,e[u]);if(y)for(var u of y(e))E.call(e,u)&&S(i,u,e[u]);return i},_=(i,e)=>{var u={};for(var l in i)b.call(i,l)&&e.indexOf(l)<0&&(u[l]=i[l]);if(i!=null&&y)for(var l of y(i))e.indexOf(l)<0&&E.call(i,l)&&(u[l]=i[l]);return u};const v=i=>{var e=i,{children:u,description:l,className:r,category:s}=e,c=_(e,["children","description","className","category"]);const a=(0,x.of)(d),h=s?.map((m,C)=>p.createElement("span",{className:a.categories,key:`${m}/${C}`},p.createElement("span",null,m),p.createElement(f.I,{name:"angle-right",className:a.chevron})));return p.createElement("div",{className:(0,t.cx)(a.label,r)},p.createElement("label",T({},c),p.createElement("div",{className:a.labelContent},h,u),l&&p.createElement("span",{className:a.description},l)))},d=i=>({label:(0,t.AH)({label:"Label",fontSize:i.typography.size.sm,fontWeight:i.typography.fontWeightMedium,lineHeight:1.25,marginBottom:i.spacing(.5),color:i.colors.text.primary,maxWidth:"480px"}),labelContent:(0,t.AH)({display:"flex",alignItems:"center"}),description:(0,t.AH)({label:"Label-description",color:i.colors.text.secondary,fontSize:i.typography.size.sm,fontWeight:i.typography.fontWeightRegular,marginTop:i.spacing(.25),display:"block"}),categories:(0,t.AH)({label:"Label-categories",display:"inline-flex",alignItems:"center"}),chevron:(0,t.AH)({margin:i.spacing(0,.25)})});try{v.displayName="Label",v.__docgenInfo={description:"",displayName:"Label",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},category:{defaultValue:null,description:"",name:"category",required:!1,type:{name:"ReactNode[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/Label.tsx#Label"]={docgenInfo:v.__docgenInfo,name:"Label",path:"src/components/Forms/Label.tsx#Label"})}catch{}try{d.displayName="getLabelStyles",d.__docgenInfo={description:"",displayName:"getLabelStyles",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isDark:{defaultValue:null,description:"",name:"isDark",required:!0,type:{name:"boolean"}},isLight:{defaultValue:null,description:"",name:"isLight",required:!0,type:{name:"boolean"}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ThemeColors"}},breakpoints:{defaultValue:null,description:"",name:"breakpoints",required:!0,type:{name:"ThemeBreakpoints"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!0,type:{name:"ThemeSpacing"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"ThemeShape"}},components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"ThemeComponents"}},typography:{defaultValue:null,description:"",name:"typography",required:!0,type:{name:"ThemeTypography"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!0,type:{name:"{ activePanel: number; navbarFixed: number; sidemenu: number; dropdown: number; typeahead: number; tooltip: number; modalBackdrop: number; modal: number; portal: number; }"}},shadows:{defaultValue:null,description:"",name:"shadows",required:!0,type:{name:"ThemeShadows"}},visualization:{defaultValue:null,description:"",name:"visualization",required:!0,type:{name:"ThemeVisualizationColors"}},transitions:{defaultValue:null,description:"",name:"transitions",required:!0,type:{name:"ThemeTransitions"}},v1:{defaultValue:null,description:"@deprecated Will be removed in a future version",name:"v1",required:!0,type:{name:"GrafanaTheme"}},flags:{defaultValue:null,description:"feature flags that might impact component looks",name:"flags",required:!0,type:{name:"{}"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/Label.tsx#getLabelStyles"]={docgenInfo:d.__docgenInfo,name:"getLabelStyles",path:"src/components/Forms/Label.tsx#getLabelStyles"})}catch{}},"./src/components/Forms/Legend.tsx":function(M,P,o){o.d(P,{s:function(){return v}});var t=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),p=o("../../node_modules/react/index.js"),x=o("./src/themes/ThemeContext.tsx"),f=Object.defineProperty,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,E=(d,i,e)=>i in d?f(d,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[i]=e,S=(d,i)=>{for(var e in i||(i={}))y.call(i,e)&&E(d,e,i[e]);if(g)for(var e of g(i))b.call(i,e)&&E(d,e,i[e]);return d},T=(d,i)=>{var e={};for(var u in d)y.call(d,u)&&i.indexOf(u)<0&&(e[u]=d[u]);if(d!=null&&g)for(var u of g(d))i.indexOf(u)<0&&b.call(d,u)&&(e[u]=d[u]);return e};const _=d=>({legend:(0,t.AH)({fontSize:d.typography.h3.fontSize,fontWeight:d.typography.fontWeightRegular,margin:d.spacing(0,0,2,0)})}),v=d=>{var i=d,{children:e,className:u}=i,l=T(i,["children","className"]);const r=(0,x.of)(_);return p.createElement("legend",S({className:(0,t.cx)(r.legend,u)},l),e)};try{_.displayName="getLegendStyles",_.__docgenInfo={description:"",displayName:"getLegendStyles",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isDark:{defaultValue:null,description:"",name:"isDark",required:!0,type:{name:"boolean"}},isLight:{defaultValue:null,description:"",name:"isLight",required:!0,type:{name:"boolean"}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ThemeColors"}},breakpoints:{defaultValue:null,description:"",name:"breakpoints",required:!0,type:{name:"ThemeBreakpoints"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!0,type:{name:"ThemeSpacing"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"ThemeShape"}},components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"ThemeComponents"}},typography:{defaultValue:null,description:"",name:"typography",required:!0,type:{name:"ThemeTypography"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!0,type:{name:"{ activePanel: number; navbarFixed: number; sidemenu: number; dropdown: number; typeahead: number; tooltip: number; modalBackdrop: number; modal: number; portal: number; }"}},shadows:{defaultValue:null,description:"",name:"shadows",required:!0,type:{name:"ThemeShadows"}},visualization:{defaultValue:null,description:"",name:"visualization",required:!0,type:{name:"ThemeVisualizationColors"}},transitions:{defaultValue:null,description:"",name:"transitions",required:!0,type:{name:"ThemeTransitions"}},v1:{defaultValue:null,description:"@deprecated Will be removed in a future version",name:"v1",required:!0,type:{name:"GrafanaTheme"}},flags:{defaultValue:null,description:"feature flags that might impact component looks",name:"flags",required:!0,type:{name:"{}"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/Legend.tsx#getLegendStyles"]={docgenInfo:_.__docgenInfo,name:"getLegendStyles",path:"src/components/Forms/Legend.tsx#getLegendStyles"})}catch{}try{v.displayName="Legend",v.__docgenInfo={description:"",displayName:"Legend",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/Legend.tsx#Legend"]={docgenInfo:v.__docgenInfo,name:"Legend",path:"src/components/Forms/Legend.tsx#Legend"})}catch{}},"./src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx":function(M,P,o){o.d(P,{z:function(){return d}});var t=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),p=o("../../node_modules/lodash/lodash.js"),x=o("../../node_modules/react/index.js"),f=o("../grafana-data/src/types/icon.ts"),g=o("./src/themes/ThemeContext.tsx"),y=o("./src/components/Icon/Icon.tsx"),b=o("../grafana-e2e-selectors/src/selectors/index.ts"),E=o("./src/themes/mixins.ts"),S=o("./src/components/Tooltip/Tooltip.tsx"),T=o("./src/components/Forms/commonStyles.ts");const _=x.forwardRef(({children:e,active:u=!1,disabled:l=!1,size:r="md",onChange:s,onClick:c,id:a,name:h=void 0,description:m,fullWidth:C,"aria-label":A},B)=>{const F=(0,g.of)(v,r,C),O=x.createElement("input",{type:"radio",className:F.radio,onChange:s,onClick:c,disabled:l,id:a,checked:u,name:h,"aria-label":A,ref:B});return m?x.createElement("div",{className:F.radioOption,"data-testid":b.Tp.components.RadioButton.container},x.createElement(S.m,{content:m,placement:"bottom"},O),x.createElement("label",{className:F.radioLabel,htmlFor:a,title:m||A},e)):x.createElement("div",{className:F.radioOption,"data-testid":b.Tp.components.RadioButton.container},O,x.createElement("label",{className:F.radioLabel,htmlFor:a,title:m||A},e))});_.displayName="RadioButton";const v=(e,u,l)=>{const{fontSize:r,height:s,padding:c}=(0,T.SM)(u,e),a=e.colors.text.secondary,h=e.colors.text.primary,m=s*e.spacing.gridSize-4-2;return{radioOption:(0,t.AH)({display:"flex",justifyContent:"space-between",position:"relative",flex:l?"1 0 0":"none",textAlign:"center"}),radio:(0,t.AH)({position:"absolute",opacity:0,zIndex:2,width:"100% !important",height:"100%",cursor:"pointer","&:checked + label":{color:e.colors.text.primary,fontWeight:e.typography.fontWeightMedium,background:e.colors.action.selected,zIndex:1},"&:focus + label, &:focus-visible + label":(0,E.Hi)(e),"&:focus:not(:focus-visible) + label":(0,E.cr)(e),"&:disabled + label":{color:e.colors.text.disabled,cursor:"not-allowed"}}),radioLabel:(0,t.AH)({display:"flex",alignItems:"center",justifyContent:"center",fontSize:r,height:`${m}px`,lineHeight:`${m}px`,color:a,padding:e.spacing(0,c),borderRadius:e.shape.radius.default,background:e.colors.background.primary,cursor:"pointer",userSelect:"none",whiteSpace:"nowrap",flexGrow:1,"&:hover":{color:h}})}};try{_.displayName="RadioButton",_.__docgenInfo={description:"",displayName:"RadioButton",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:"",name:"name",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/RadioButtonGroup/RadioButton.tsx#RadioButton"]={docgenInfo:_.__docgenInfo,name:"RadioButton",path:"src/components/Forms/RadioButtonGroup/RadioButton.tsx#RadioButton"})}catch{}function d({options:e,value:u,onChange:l,onClick:r,disabled:s,disabledOptions:c,size:a="md",id:h,className:m,fullWidth:C=!1,autoFocus:A=!1,"aria-label":B,invalid:F=!1}){const O=(0,x.useCallback)(j=>()=>{l&&l(j.value)},[l]),R=(0,x.useCallback)(j=>()=>{r&&r(j.value)},[r]),D=h??(0,p.uniqueId)("radiogroup-"),L=(0,x.useRef)(D),I=(0,g.of)(i),N=(0,x.useRef)(null);return(0,x.useEffect)(()=>{A&&N.current&&N.current.focus()},[A]),x.createElement("div",{role:"radiogroup","aria-label":B,className:(0,t.cx)(I.radioGroup,C&&I.fullWidth,F&&I.invalid,m)},e.map((j,H)=>{const K=c&&j.value&&c.includes(j.value),U=j.icon?(0,f.Uo)(j.icon):void 0,Y=!!(j.imgUrl||j.label||j.component);return x.createElement(_,{size:a,disabled:K||s,active:u===j.value,key:`o.label-${H}`,"aria-label":j.ariaLabel,onChange:O(j),onClick:R(j),id:`option-${j.value}-${D}`,name:L.current,description:j.description,fullWidth:C,ref:u===j.value?N:void 0},U&&x.createElement(y.I,{name:U,className:(0,t.cx)(Y&&I.icon)}),j.imgUrl&&x.createElement("img",{src:j.imgUrl,alt:j.label,className:I.img}),j.label," ",j.component?x.createElement(j.component,null):null)}))}d.displayName="RadioButtonGroup";const i=e=>({radioGroup:(0,t.AH)({display:"inline-flex",flexDirection:"row",flexWrap:"nowrap",border:`1px solid ${e.components.input.borderColor}`,borderRadius:e.shape.radius.default,padding:"2px"}),fullWidth:(0,t.AH)({display:"flex"}),icon:(0,t.AH)({marginRight:"6px"}),img:(0,t.AH)({width:e.spacing(2),height:e.spacing(2),marginRight:e.spacing(1)}),invalid:(0,t.AH)({border:`1px solid ${e.colors.error.border}`})});try{d.displayName="RadioButtonGroup",d.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},disabledOptions:{defaultValue:null,description:"",name:"disabledOptions",required:!1,type:{name:"T[]"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectableValue<T>[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((value: T) => void)"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},autoFocus:{defaultValue:{value:"false"},description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx#RadioButtonGroup"]={docgenInfo:d.__docgenInfo,name:"RadioButtonGroup",path:"src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx#RadioButtonGroup"})}catch{}},"./src/components/Switch/Switch.tsx":function(M,P,o){o.d(P,{K:function(){return s},d:function(){return r}});var t=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),p=o("../../node_modules/lodash/lodash.js"),x=o.n(p),f=o("../../node_modules/react/index.js"),g=o("../grafana-data/src/utils/deprecationWarning.ts"),y=o("./src/themes/ThemeContext.tsx"),b=o("./src/themes/mixins.ts"),E=Object.defineProperty,S=Object.defineProperties,T=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,i=(a,h,m)=>h in a?E(a,h,{enumerable:!0,configurable:!0,writable:!0,value:m}):a[h]=m,e=(a,h)=>{for(var m in h||(h={}))v.call(h,m)&&i(a,m,h[m]);if(_)for(var m of _(h))d.call(h,m)&&i(a,m,h[m]);return a},u=(a,h)=>S(a,T(h)),l=(a,h)=>{var m={};for(var C in a)v.call(a,C)&&h.indexOf(C)<0&&(m[C]=a[C]);if(a!=null&&_)for(var C of _(a))h.indexOf(C)<0&&d.call(a,C)&&(m[C]=a[C]);return m};const r=f.forwardRef((a,h)=>{var m=a,{value:C,checked:A,onChange:B,id:F,label:O,disabled:R,invalid:D=!1}=m,L=l(m,["value","checked","onChange","id","label","disabled","invalid"]);A&&(0,g.l)("Switch","checked prop","value");const I=(0,y.of)(c),N=(0,f.useRef)(F||(0,p.uniqueId)("switch-"));return f.createElement("div",{className:(0,t.cx)(I.switch,D&&I.invalid)},f.createElement("input",u(e({type:"checkbox",disabled:R,checked:C,onChange:j=>{!R&&B?.(j)},id:N.current},L),{ref:h})),f.createElement("label",{htmlFor:N.current,"aria-label":O??"Toggle switch"}))});r.displayName="Switch";const s=f.forwardRef((a,h)=>{var m=a,{transparent:C,className:A,showLabel:B,label:F,value:O,id:R,invalid:D}=m,L=l(m,["transparent","className","showLabel","label","value","id","invalid"]);const I=(0,y.of)(c,C);return f.createElement("div",{className:(0,t.cx)(I.inlineContainer,A,L.disabled&&I.disabled,D&&I.invalid)},B&&f.createElement("label",{htmlFor:R,className:(0,t.cx)(I.inlineLabel,O&&I.inlineLabelEnabled,"inline-switch-label")},F),f.createElement(r,u(e({},L),{id:R,label:F,ref:h,value:O})))});s.displayName="Switch";const c=(a,h)=>({switch:(0,t.AH)({width:"32px",height:"16px",position:"relative",lineHeight:1,input:{opacity:0,left:"-100vw",zIndex:-1e3,position:"absolute","&:checked + label":{background:a.colors.primary.main,borderColor:a.colors.primary.main,"&:hover":{background:a.colors.primary.shade},"&::after":{transform:"translate3d(18px, -50%, 0)",background:a.colors.primary.contrastText}},"&:disabled + label":{background:a.colors.action.disabledBackground,borderColor:a.colors.border.weak,cursor:"not-allowed","&:hover":{background:a.colors.action.disabledBackground}},"&:disabled:checked + label":{"&::after":{background:a.colors.text.disabled}},"&:focus + label, &:focus-visible + label":(0,b.Hi)(a),"&:focus:not(:focus-visible) + label":(0,b.cr)(a)},label:{width:"100%",height:"100%",cursor:"pointer",borderRadius:a.shape.radius.pill,background:a.components.input.background,border:`1px solid ${a.components.input.borderColor}`,transition:"all 0.3s ease","&:hover":{borderColor:a.components.input.borderHover},"&::after":{position:"absolute",display:"block",content:'""',width:"12px",height:"12px",borderRadius:a.shape.radius.circle,background:a.colors.text.secondary,boxShadow:a.shadows.z1,top:"50%",transform:"translate3d(2px, -50%, 0)",transition:"transform 0.2s cubic-bezier(0.19, 1, 0.22, 1)","@media (forced-colors: active)":{border:"1px solid transparent"}}}}),inlineContainer:(0,t.AH)({padding:a.spacing(0,1),height:a.spacing(a.components.height.md),display:"inline-flex",alignItems:"center",background:h?"transparent":a.components.input.background,border:`1px solid ${h?"transparent":a.components.input.borderColor}`,borderRadius:a.shape.radius.default,"&:hover":{border:`1px solid ${h?"transparent":a.components.input.borderHover}`,".inline-switch-label":{color:a.colors.text.primary}}}),disabled:(0,t.AH)({backgroundColor:"rgba(204, 204, 220, 0.04)",color:"rgba(204, 204, 220, 0.6)",border:"1px solid rgba(204, 204, 220, 0.04)"}),inlineLabel:(0,t.AH)({cursor:"pointer",paddingRight:a.spacing(1),color:a.colors.text.secondary,whiteSpace:"nowrap"}),inlineLabelEnabled:(0,t.AH)({color:a.colors.text.primary}),invalid:(0,t.AH)({"input + label, input:checked + label, input:hover + label":{border:`1px solid ${a.colors.error.border}`}})});try{r.displayName="Switch",r.__docgenInfo={description:"",displayName:"Switch",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},transparent:{defaultValue:null,description:"Make inline switch's background and border transparent",name:"transparent",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Switch/Switch.tsx#Switch"]={docgenInfo:r.__docgenInfo,name:"Switch",path:"src/components/Switch/Switch.tsx#Switch"})}catch{}},"./src/components/TextArea/TextArea.tsx":function(M,P,o){o.d(P,{f:function(){return e}});var t=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),p=o("../../node_modules/react/index.js"),x=o("./src/themes/ThemeContext.tsx"),f=o("./src/components/Forms/commonStyles.ts"),g=Object.defineProperty,y=Object.defineProperties,b=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,_=(l,r,s)=>r in l?g(l,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[r]=s,v=(l,r)=>{for(var s in r||(r={}))S.call(r,s)&&_(l,s,r[s]);if(E)for(var s of E(r))T.call(r,s)&&_(l,s,r[s]);return l},d=(l,r)=>y(l,b(r)),i=(l,r)=>{var s={};for(var c in l)S.call(l,c)&&r.indexOf(c)<0&&(s[c]=l[c]);if(l!=null&&E)for(var c of E(l))r.indexOf(c)<0&&T.call(l,c)&&(s[c]=l[c]);return s};const e=p.forwardRef((l,r)=>{var s=l,{invalid:c,className:a}=s,h=i(s,["invalid","className"]);const m=(0,x.of)(u,c);return p.createElement("textarea",d(v({},h),{className:(0,t.cx)(m.textarea,a),ref:r}))}),u=(l,r=!1)=>({textarea:(0,t.cx)((0,f.Xb)(l),(0,f.gm)(l),(0,t.AH)({display:"block",borderRadius:l.shape.radius.default,padding:`${l.spacing.gridSize/4}px ${l.spacing.gridSize}px`,width:"100%",borderColor:r?l.colors.error.border:l.components.input.borderColor}))});e.displayName="TextArea";try{e.displayName="TextArea",e.__docgenInfo={description:"",displayName:"TextArea",props:{invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:e.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch{}},"./src/utils/reactUtils.ts":function(M,P,o){o.d(P,{b:function(){return x},e:function(){return p}});var t=o("../../node_modules/react/index.js");function p(f){let g;const y=t.Children.only(f);return"id"in y?.props?g=y.props.id:"inputId"in y.props&&(g=y?.props.inputId),typeof g=="string"?g:void 0}function x(f,g){if(t.isValidElement(f)||typeof f=="string"||typeof f=="number")return f;if(typeof f=="function"&&g)return f(g);throw new Error(`${f} is not a React element nor a function that returns React element`)}},"./src/utils/storybook/withStoryContainer.tsx":function(M,P,o){o.d(P,{d:function(){return f}});var t=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),p=o("../../node_modules/react/index.js");const x=({width:g,height:y,showBoundaries:b,children:E})=>{const S="#f0f0f0",T=g?`${g}px`:"100%",_=y!==0?`${y}px`:"auto",v=b&&(0,t.AH)({backgroundColor:"white",backgroundSize:"30px 30px",backgroundPosition:"0 0, 15px 15px",backgroundImage:`linear-gradient(
          45deg,
          ${S} 25%,
          transparent 25%,
          transparent 75%,
          ${S} 75%,
          ${S}
        ),
        linear-gradient(45deg, ${S} 25%, transparent 25%, transparent 75%, ${S} 75%, ${S})`});return p.createElement("div",{className:(0,t.cx)((0,t.AH)({width:T,height:_}),v)},E)},f=(g,y)=>p.createElement(x,{width:y.args.containerWidth,height:y.args.containerHeight,showBoundaries:y.args.showBoundaries},g())}}]);
