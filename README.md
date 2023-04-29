# Second Mobile Advanced work 

🎓 College: [Faculdade Metodista Granbery](http://granbery.edu.br/)

👨‍🏫 Teacher: [Érica C. R. Carvalho - Github](https://github.com/ericacrcarvalho) | [Linkedin](https://www.linkedin.com/in/ericacrcarvalho/)


---
#### Subject: Advanced Mobile Development 
#### Delivery date: 27/11/22 (AVA plataform) - Presentation date: 28/11/22
#### Value: 4 points
#### Theme:Continue the final work of the previous subject / Student choiceThe work is individual

---

### Description

The work consists of creating an application that contains features of an app complete, with login and user registration screens, complete CRUD, navigation between screens, etc. A theme must be chosen and all images and colors must be related with that theme. All the contents covered in the subjects of “Introduction to Mobile Development” and “Advanced Mobile Development” must be considered.
 
### The following are some elements that must contain MANDATORY at work:

- React Hooks (useState, useEffect, useRef, etc..)
- Navigation (Stack or Tabs or Drawer)
- Icons (Icons)
- animation
- Modal or Modalize
- Flatlist and Card
- Firebase Authentication
- Firebase Firestore (full CRUD and data persistence)
- Camera and Google Maps manipulation

### Attention:

- After choosing the theme and the main colors of the app, the pages must contain information related to the topic, such as texts, photos, videos, cards, etc. Pages without content will not be accepted.
- Any extra content will be scored.

The evaluation of the work will consider:

a) The required mandatory elements

b) The organization of the code

c) The look of the app (colors, layout, etc.)

d) Extra content

### The following elements must be present in the code:

- The code must be organized and readable. Folders must be created for
each “part” of the code: components, images, screens, routes, etc.
- Colors and sizes must be in a separate file (eg colors.js and
sizes.js)
- Buttons and text inputs, etc. must be a stateless component (eg:
MyButton.js and MyTextInput.js)


Observations:

- The work must be done in a group and it is not allowed to copy the work of the other group. If this occurs, the grade will be divided by the total number of students involved in the copy.
- The Github link containing the work (or the zipped file) must be sent by AVA.
- All students must present their work on the agreed date.
- Use creativity and create a cool app =)
- Any questions/problems, contact us by email.

## Tools

1. [Firebase:](https://console.firebase.google.com/)
```bash
$ npm install firebase
```

2. [Tutorial Expo e Firebase:](https://docs.expo.dev/guides/using-firebase/)

3. Arquivo de configuração do Firebase em anexo (firebaseconfig.js)

4. Em todas as páginas, importar:

```javascript
import { auth } from '../config/firebaseconfig';
```

5. Funções para a tela 'Login': signInWithEmailAndPassword e onAuthStateChanged

```javascript
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
```

6. Função para a tela 'Cadastro': createUserWithEmailAndPassword 

```javascript
import { createUserWithEmailAndPassword } from 'firebase/auth';
```

7. Função para a tela 'Home': signOut

```javascript
import { signOut } from 'firebase/auth';
```

8. [Tratando os erros (lista de erros do firebase): ](https://gist.github.com/Albejr/a38cdeac247ef177986c99629680afb4)

### FLATLIST

[Flatlist](https://reactnative.dev/docs/flatlist)

### CARD

[Card](https://callstack.github.io/react-native-paper/card.html)

```bash
    npm install react-native-paper@5.0.0-rc.4
```

### Modalize

[Modalize](https://jeremybarbet.github.io/react-native-modalize/#/)

```bash
    npm add react-native-modalize

    npm add react-native-gesture-handler

    npx pod-install ios
```

[Modal](https://reactnative.dev/docs/modal)

[useRef](https://pt-br.reactjs.org/docs/hooks-reference.html#useref)


-----


### API


[apimovie](https://developers.themoviedb.org/3/getting-started/introduction)

-----

### Carrousel

[Carousel](https://github.com/meliorence/react-native-snap-carousel#layouts-and-custom-interpolations)

### Project Images:



![Screenshot_20221127_130732_host exp exponent](https://user-images.githubusercontent.com/56802572/235315587-a9c6daee-819e-46e6-a305-04e0be8695d4.jpg)
![Screenshot_20221127_130719_host exp exponent](https://user-images.githubusercontent.com/56802572/235315577-7cfaa7e2-00a3-4ac2-a925-9561b1c62a6c.jpg)
![Screenshot_20221127_130724_host exp exponent](https://user-images.githubusercontent.com/56802572/235315585-a32c2c81-ccb9-4aae-9e72-f7747930c6b6.jpg)
![Screenshot_20221127_130736_host exp exponent](https://user-images.githubusercontent.com/56802572/235315594-f941a621-f7a5-4471-9a13-13efd84f8841.jpg)
![Screenshot_20221127_130740_host exp exponent](https://user-images.githubusercontent.com/56802572/235315596-84922947-0963-40d9-b8cb-c80775a3f2d9.jpg)



https://user-images.githubusercontent.com/56802572/235315604-3abada44-4592-4908-9497-143e85aab7d2.mp4

