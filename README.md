# FormGenerator
### Getting Started with Angular Libraries - Step-by-Step Guide

## Introduction
Welcome to the world of Angular libraries! In this guide, we'll walk you through the process of creating and using Angular libraries. Whether you're a beginner or just looking for a quick refresher, this guide is designed to help you get started.

### Prerequisites
Before we begin, make sure you have the following prerequisites installed on your system:
- Node.js and npm (Node Package Manager)
  - Angular CLI (Command Line Interface)

## Part 1: Creating a New Angular Project - 13th-January-2024
1. **Create a New Angular Project**
- Go to the [Angular official guide](https://angular.io/guide/creating-libraries) for more details.
- Open your terminal and run the following command to create a new project without app folders:
  ```bash
  ng new <project-name> --no-create-application
  ```
  This command generates a project with essential files like `package.json` and `angular.json`.

- **Notes**:
  - `package.json` contains scripts and dependencies for your project.
  - You can add and configure npm scripts in the `scripts` section.

2. **Generate a Library Component**
- Navigate to the project directory you just created.
- Run this command to generate a library component inside the `projects` folder:
  ```bash
  ng g library <library-name>
  ```
- **Notes**:
  - This command adds `ng-packagr` to your `package.json`, which is used for packaging the library.
  - The `angular.json` file is updated to include the new library under the `projects` section with `projectType` set to 'library'.

## Part 2: Using the Library in a New Angular Project

1. **Create a New Angular Project for Your Application**
  - In a different directory, create a new Angular project:
    ```bash
    ng new <project-name>
    ```

2. **Add Angular Material (Optional)**
  - If you want to use Angular Material, run this command to add it to your project:
    ```bash
    ng add @angular/material
    ```

3. **Build the Library**
  - Back in your library project, build the library using this command:
    ```bash
    ng build <library-name> --configuration development
    ```
    This uses the development configuration specified in `angular.json` for the library.

4. **Pack the Library**
  - Navigate to the <library-name> in the `dist` folder within your library project.
  - Pack the library using npm:
    ```bash
    cd dist/<library-name>
    npm pack
    ```
    This creates a .tgz file that you can use to install the library in your application.

5. **Install the Library in Your Application**
  - Copy the file path of the .tgz file created in the previous step.
  - Run this command in your Angular application directory to install the library:
    ```bash
    npm i <dist-tgz-file-path>
    ```

## Part 3: Using a Component from the Library in Your Application

1. **Update ngModules**
  - Get the module name from your library and add it to the import section of your application's module.

  - **Notes**:
    - Ensure that the import points to the library and not a relative path (e.g., "../../path").

2. **Use the Library Component**
  - In your parent component's HTML file, use the library component by its selector or tag-name.

## Part 4: Personal Notes - Routing

- **Creating a New Route**
  - In your application's `AppRoutingModule`, add the following route to the `routes` array:
    ```javascript
    { path: '', component: HelloComponent }
    ```
    This will route to the `HelloComponent` when no path is specified (e.g., http://localhost:4200).

- **Displaying the Component**
  - To display the component, use `<router-outlet></router-outlet>` wherever needed in your application.

---

## Part 5: Using Created Component from Library in Project - 14-January-24
- **Creating a New Component in Your Library**

1. Navigate to the library's 'lib' folder.
    ```
    cd projects/<library-name>/src/lib
    ```
2. Generate a new component within your library.
   ```
   ng g c <component-name>
   ```

- **Updating Library Exports and Modules**

1. Add the newly created component to the exports in the 'public-api.ts' file
2. Update the ngModule exports section in the '.module.ts' file of your library.

- **Rebuilding the Library**

1. Delete the 'dist' folder from your library.
2. Recreate the 'dist' folder by following the previous steps.
3. re-pack the library by following the previous steps to generate `.tgz` file.

- **Reinstalling the Library in Your Angular Project**

1. Delete the library from your Angular project's node_modules folder.
2. Reinstall the library in your project by following the previous installation steps.

- **Using the New Component in Your Project**

1. You can now use the newly created component from the library in your parent component's HTML by using its selector or tag name.

## Part 6: If You Encounter Errors with the New Component:

1. Delete the library from your Angular project.
2. Delete the 'dist' folder from your library.
3. Clear the cache on both the library and your project.
    ```
    npm cache clear --force
    ```
4. Change the library version and name in your library's 'package.json'.
  - For example:
    - Change `"name": "your-library"` to `"name": "your-library2"`
    - Change `"version": "0.0.1"` to `"version": "0.0.2"`

5. Follow the previous steps to recreate the 'dist' folder and reinstall the library in your project.

## Part 7: Create and Use Application in Library - 16-January-24

- **Creating an Application in Your Library**

1. Navigate to your workspace directory and run the following command to create an application within your library:
    ```
    ng g application <app-name>
    ```

- **Add Angular Material to Library and Project**
1. To use Angular Material, add it to both your library and project using the following command:
    ```
    ng add @angular/material
    ```

2. Check Angular Versions in package.json
  - Verify the Angular versions in your project's `package.json` file.
  - Update them if necessary to ensure compatibility.

## Part 8: Watching for Changes

- **Watch for Changes to Avoid Building the Library Repeatedly**
1. Run the following command to watch for changes in your library:
    ```
    ng build <library-name> --watch --configuration development
    ```
  - This command allows you to monitor changes without rebuilding the library every time you make an update.

## Part 9: Creating a Component in Your Application

- **Create a Component in Your Application**
1. Use the following command to generate a component in your application project:
    ```
    ng g c <component-name> --project=<app-name>
    ```
  - Now you can use the application and library together as previously described, even with an external application.

---



I hope this step-by-step guide helps you understand and implement Angular libraries effectively. If you have any questions or need further assistance, please feel free to ask. Happy coding!
