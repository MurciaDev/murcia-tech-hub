# 📂 Contribuir

## 🤝 Código de conducta
Ten en cuenta que este proyecto se publica bajo el [Código de Conducta de Contribuidora y Contribuidor](https://github.com/MurciaDev/CODE_OF_CONDUCT) de la comunidad . Ya sabes que al participar en este proyecto estás aceptando cumplir con los términos.

## 🤔 ¿Cómo contribuir?

Generamos el `README` de forma dinámica, así que no es necesario que actualices los datos ahí, tendrás que hacerlo modificando el fichero [`companies.json`](./companies.json).

Añade tus cambios al fichero bajo la siguiente estructura:

```json
[
  {
    "category": "🧨 Productos peligrosos y poco reales", // String
    "companies": [
      {
        "address": "Mundo de los Looney Tunes, Ciudad ACME", // String
        "name": "ACME Corporation", // String
        "remoteWork": "NONE", // Enum<String> 'NONE' | 'FLEX' | 'FULL' 
        "stack": "Correcaminos, Coyote", // String
        "url": "https://www.wbkidsgo.com/looney-tunes" // String
      }
    ]
  }
]
```

Una vez tengas actualizado los datos, necesitaremos generar el nuevo `README` actualizado. Ejecuta en tu terminal el siguiente comando para generarlo:

Si quieres ver una previsualización de tus cambios puedes ejecutar el siguiente comando para generar el nuevo `README`. 
```node
npm run build
```

Habrá generado un nuevo `README` con los cambios que hayas realizado en el fichero [`companies.json`](./companies.json). Aunque no será necesario que lo incluyas en tu PR, ya que al fusionar la rama se volverá a generar.

¡Gracias por tu contribución! 🤘
