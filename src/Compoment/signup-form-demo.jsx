"use client"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import styles from "./signup-form-demo.module.css"
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react"

export default function SignupFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Form submitted")
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Welcome to Aceternity</h2>
      <p className={styles.subtitle}>{"Login to aceternity if you can because we don't have a login flow yet"}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.field}>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" 
            />
          </div>
          <div className={styles.field}>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </div>
        </div>

        <div className={styles.field}>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </div>

        <div className={styles.field}>
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </div>

        <div className={styles.field}>
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="password" />
        </div>

        <button className={styles.primaryButton} type="submit">
          {"Sign up \u2192"}
        </button>

        <div className={styles.divider} />

        <div className={styles.providers}>
          <button className={styles.providerButton} type="button" aria-label="Continue with GitHub">
            <IconBrandGithub size={16} />
            <span>GitHub</span>
          </button>
          <button className={styles.providerButton} type="button" aria-label="Continue with Google">
            <IconBrandGoogle size={16} />
            <span>Google</span>
          </button>
          <button className={styles.providerButton} type="button" aria-label="Continue with OnlyFans">
            <IconBrandOnlyfans size={16} />
            <span>OnlyFans</span>
          </button>
        </div>
      </form>
    </div>
  )
}
